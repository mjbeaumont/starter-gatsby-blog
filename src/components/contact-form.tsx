import * as React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import {
  contactSchema,
  FormRole,
  FormData,
} from '../utils/contact-form/validate-form';
import { Cta } from '../components/cta';
import { ContentWidth } from '../components/content-width';
import { SectionHeading } from '../components/section-heading';

import * as styles from './contact-form.module.css';

const initialValues = {
  email: '',
  phone: '',
  message: '',
  role: '',
  name: '',
};

interface RenderErrorMessageProps {
  msg: string;
}

const renderErrorMessage = ({ msg }: RenderErrorMessageProps) => (
  <div className={styles.error}>{msg}</div>
);

export const ContactForm = () => {
  const handleSubmit = async (
    values: FormData,
    helpers: FormikHelpers<FormData>
  ) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    helpers.resetForm();
    console.log(await response.json());
  };

  return (
    <section className={styles.container}>
      <ContentWidth>
        <SectionHeading>Contact Us</SectionHeading>
        <Formik
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
          // @ts-expect-error want role to start as empty
          initialValues={initialValues}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.inputContainer}>
                <label htmlFor="name">
                  Name <span>*</span>
                </label>
                <Field type="text" name="name" id="name" />
                <ErrorMessage
                  name="name"
                  render={(msg) => renderErrorMessage({ msg })}
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="name">
                  Email Address <span>*</span>
                </label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage
                  name="email"
                  render={(msg) => renderErrorMessage({ msg })}
                />
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Phone Number</label>
                <Field type="phone" name="phone" id="phone" />
                <ErrorMessage
                  name="phone"
                  render={(msg) => renderErrorMessage({ msg })}
                />
              </div>
              <div className={styles.inputContainer}>
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
              </div>
              <label htmlFor="name">
                What is your message? <span>*</span>
              </label>
              <Field as="textarea" name="message" id="message" />
              <ErrorMessage
                name="message"
                render={(msg) => renderErrorMessage({ msg })}
              />
              <Cta disabled={isSubmitting}>Send Message</Cta>
            </Form>
          )}
        </Formik>
      </ContentWidth>
    </section>
  );
};
