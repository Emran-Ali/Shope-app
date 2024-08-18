import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { Form, Formik } from "formik";
import { useState } from "react";

import Check from "@mui/icons-material/Check";
import HomeIcon from "@mui/icons-material/Home";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

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

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1E2772",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1E2772",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));
const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#1E2772",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#1E2772",
    color: "#fff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#1E2772",
    color: "#fff",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PinDropIcon />,
    2: <HomeIcon />,
    3: <RemoveRedEyeIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? <Check /> : icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const PropertyForm = () => {
  const [step, setStep] = useState(0);

  const handleNext = (values) => {
    console.log(values);

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
        <Stepper
          activeStep={step}
          alternativeLabel
          connector={<ColorlibConnector />}
        >
          {steps.map((item, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
          ))}
        </Stepper>
        <br />
        <Formik
          initialValues={{
            catagory: "",
            division: "",
            district: "",
            isDistrict: "",
            isUpozila: "",
            upazila: "",
            union: "",
            village: "",
            houseName: "",
            houseNumber: "",
            avgFlat: "",
            numberOfFlore: "",
            lift: "",
            parking: "",
            sequrity: "",
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
