import * as Yup from "yup";

export const validationSchema = [
    Yup.object({
        catagory: Yup.string().required("Please select a Property type"),
        division: Yup.string().required("Division is required"),
        houseName: Yup.string().required("House Name is required"),
        houseNumber: Yup.string().required("House Number is required"),
    }),
    Yup.object({
        avgFlat: Yup.string().required("Number is requred"),
        lift: Yup.string().required("Lift is required"),
        parking: Yup.string().required("Parking is required"),
        sequrity: Yup.string().required("Sequrity is required"),
    }),
    Yup.object({
    }),
];