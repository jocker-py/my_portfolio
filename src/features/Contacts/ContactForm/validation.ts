import * as Yup from "yup";
import {FormValuesType} from "./ContactForm";
import {FormikErrors} from "formik";

export const handleValidation = (values: FormValuesType): FormikErrors<FormValuesType> => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Please enter a valid email address").required("Please enter your email"),
    subject: Yup.string().required("Please enter a subject"),
    message: Yup.string().required("Please enter a message"),
  });

  try {
    schema.validateSync(values, { abortEarly: false });
    return {};
  } catch (errors) {
    if (errors instanceof Yup.ValidationError) {
      return errors.inner.reduce((acc, err) => {
        return {...acc, [err.path as string]: err.message};
      }, {});
    }

    throw errors;
  }
};