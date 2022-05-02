import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { contactSchema, FormRole } from '../utils/contact-form/validate-form';
import { Cta } from '../components/cta';
import { ContentWidth } from '../components/content-width';

import * as styles from './contact-form.module.css';

const initialValues = {
  email: '',
  phone: '',
  message: '',
  role: '',
  name: '',
};

export const ContactForm = () => {
  const handleSubmit = () => console.log('form submitted');

  return (
    <ContentWidth>
      <Formik
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="name">
              Email Address <span>*</span>
            </label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
            <label htmlFor="name">Phone Number</label>
            <Field type="phone" name="phone" id="phone" />
            <ErrorMessage name="phone" component="div" />
            <label htmlFor="role">
              What is your relationship to the HVP <span>*</span>
            </label>
            <Field as="select" name="role" id="role">
              <option value="">Choose one</option>
              {Object.values(FormRole).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </Field>
            <label htmlFor="name">
              What is your message? <span>*</span>
            </label>
            <Field as="textarea" name="message" id="role" />
            <ErrorMessage name="message" component="div" />
            <Cta disabled={isSubmitting}>Send Message</Cta>
          </Form>
        )}
      </Formik>
    </ContentWidth>
  );
};
