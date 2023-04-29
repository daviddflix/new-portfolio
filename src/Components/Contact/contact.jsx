import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from './contact.module.css'

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  message: Yup.string().trim().required("Message is required"),
});

const initialValues = {
  name: "",
  message: "",
};

const onSubmit = (values, { resetForm }) => {

  console.log(values)

  emailjs.send('service_4sqpzgh', 'template_botbsug', values, 'G2t7ibFR5UTGeoMxS')
    .then((result) => {
      if (result.status === 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Message sent successfully',
          html:
            'I will write you back, <b>thanks</b>',
          showConfirmButton: false,
          timer: 1500
        })
      }
      resetForm();
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Please try again</a>'
      })
      resetForm();
    });
 
};

const Contact = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form id='form' className={s.form}>
          <h1 className={s.mainTitle}>Contact Me</h1>
          <div className={s.container}>
            <label className={s.title} htmlFor="name">Name</label>
            <Field placeholder='Enter your name here' className={s.input} name="name" type="text" />
            <ErrorMessage className={s.error} name="name" />
          </div>
          <div className={s.container}>
            <label className={s.title} htmlFor="message">Message</label>
            <Field name="message">
              {({ field }) => (
                <textarea
                  {...field}
                  rows="5"
                  cols="50"
                  className={s.message}
                  placeholder="Enter your message here..."
                />
              )}
            </Field>
            <ErrorMessage className={s.error} name="message" />
          </div>
          <button className={s.btn} type="submit">{isSubmitting ? 'Loading...': 'Submit'}</button>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;