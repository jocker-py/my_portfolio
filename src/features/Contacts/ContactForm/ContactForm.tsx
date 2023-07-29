import React from "react";
import s from "./ContactForm.module.scss";
import axios, {AxiosResponse} from "axios";
import {Form, Formik, Field, ErrorMessage, FormikHelpers} from "formik";
import {handleValidation} from "./validation";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button";

export type FormValuesType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const CHAT_ID = "484619169";
const TOKEN = "1762106448:AAFfqFa9km1qtRmeJivw2Jy4D3umshfNA3k";

const ContactForm = () => {
  const handleSubmit = async (values: FormValuesType, {setSubmitting}: FormikHelpers<FormValuesType>) => {
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    const message = `
      Name: ${values.name}
      Subject: ${values.subject}
      Email: ${values.email}
      Message: ${values.message}
    `;
    const data = {text: message, chat_id: CHAT_ID};
    try {
      const response = await axios.post<AxiosResponse>(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status === 200) alert("Thanks for your message! I will text you soon");
    } catch (error) {
      alert(`Error: ${error} `);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validate={handleValidation}
      onSubmit={handleSubmit}
    >
      {({isSubmitting}) => (
        <Form className={s.form}>
          <div className={s.wrapper}>
            <div className={s.fieldWrapper}>
              <Field type="text" name="name" placeholder="Your name" className={s.name} />
              <ErrorMessage name="name" component="div" className={s.errorMessage}/>
            </div>
            <div className={s.fieldWrapper}>
              <Field type="email" name="email" className={s.email} placeholder="Your email" />
              <ErrorMessage name="email" component="div" className={s.errorMessage}/>
            </div>
          </div>
          <div className={s.fieldWrapper}>
            <Field type="text" name="subject" placeholder="Your subject" className={s.subject} />
            <ErrorMessage name="subject" component="div" className={s.errorMessage}/>
          </div>
          <div className={s.fieldWrapper}>
            <Field type="text" name="message" placeholder="Your message" rows={8} className={s.textarea} />
            <ErrorMessage name="message" component="div" className={s.errorMessage}/>
          </div>
          <Button text="Send Message" icon={faPaperPlane} disabled={isSubmitting}/>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;