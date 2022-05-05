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

import { FormStatus, FormDialog } from '../components/form-dialog';

import { HOME_CONTACT_ID } from '../constants';

import * as styles from './contact-form.module.css';
import classNames from 'classnames';

const initialValues = {
  email: '',
  phone: '',
  message: '',
  role: '',
  name: '',
  emailConsent: false,
};

interface RenderErrorMessageProps {
  msg: string;
}

const renderErrorMessage = ({ msg }: RenderErrorMessageProps) => (
  <div className={styles.error}>{msg}</div>
);

export const ContactForm = () => {
  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);

  const revealSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleSubmit = async (
    values: FormData,
    helpers: FormikHelpers<FormData>
  ) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    helpers.resetForm();
    revealSuccessMessage();
  };

  return (
    <section className={styles.container} id={HOME_CONTACT_ID}>
      <ContentWidth>
        <SectionHeading>Contact Us</SectionHeading>
        {showSuccess && (
          <FormDialog
            status={FormStatus.Success}
            message="Thank you for contacting us. Your message was sent successfully!"
          />
        )}
        <Formik
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
          // @ts-expect-error want role to start as empty
          initialValues={initialValues}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.formInner}>
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
                  <ErrorMessage
                    name="role"
                    render={(msg) => renderErrorMessage({ msg })}
                  />
                </div>
                <div className={classNames(styles.inputContainer, styles.full)}>
                  <label htmlFor="name">
                    What is your message? <span>*</span>
                  </label>
                  <Field as="textarea" name="message" id="message" />
                  <ErrorMessage
                    name="message"
                    render={(msg) => renderErrorMessage({ msg })}
                  />
                </div>

                <div
                  className={classNames(
                    styles.inputContainer,
                    styles.full,
                    styles.consent
                  )}
                >
                  <label htmlFor="emailConsent">
                    <Field type="checkbox" name="emailConsent" />
                    Would you like to receive updates via email from the
                    Musicians of the HVP?
                  </label>
                </div>
              </div>
              <Cta disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Sending' : 'Send Message'}
              </Cta>
            </Form>
          )}
        </Formik>
      </ContentWidth>
    </section>
  );
};
