import * as Yup from "yup";

export const validationSchema = [
    Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
    }),
    Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        phone: Yup.string().required("Phone is required"),
    }),
    Yup.object({
        address: Yup.string().required("Address is required"),
    }),
];