import { Form, Formik } from "formik";
import { useState } from "react";

import {
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

import Step1 from "./form-step/Step1";
import Step2 from "./form-step/Step2";
import Step3 from "./form-step/Step3";

import { validationSchema } from "../lib/validationSchema";

const PropertyForm = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (values) => {
    console.log(values);
    alert("Form submitted successfully");
  };

  const steps = [
    { label: "Personal Details", component: <Step1 handleNext={handleNext} /> },
    {
      label: "Contact Information",
      component: <Step2 handleNext={handleNext} handleBack={handleBack} />,
    },
    { label: "Address", component: <Step3 handleBack={handleBack} /> },
  ];

  return (
    <Container component="main" maxWidth="xl">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Multi-Step Form
        </Typography>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((item, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        <br />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
          }}
          validationSchema={validationSchema[step]}
          onSubmit={(values) => {
            if (step === steps.length - 1) {
              handleSubmit(values);
            } else {
              handleNext();
            }
          }}
        >
          <Form>{steps[step].component}</Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default PropertyForm;
