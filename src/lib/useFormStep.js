import { useFormikContext } from "formik";

const useFormStep = () => {
    const { values, handleChange, handleBlur, errors, touched, isValid, dirty } =
        useFormikContext();

    return {
        values,
        handleChange,
        handleBlur,
        errors,
        touched,
        isValid,
        dirty,
    };
};

export default useFormStep;