import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';

const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Full Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.subject) {
    errors.subject = 'Subject is required';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }

  return errors;
};

const ContactForm = () => {
  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Formulario enviado");
    resetForm(); // Reset the form after successful submission
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
  <div className="leading-loose">
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validate={validateForm}
      onSubmit={handleFormSubmit}
    >
      <Form className="max-w-full m-4 p-6 sm:p-8 bg-white rounded-xl shadow-xl text-left ">
        <div className="grid grid-cols-2 gap-4">

        {['name', 'email', 'subject'].map((fieldName) => (
          <div key={fieldName} className="mb-4">
            <label
              className="block text-lg text-white dark:text-gray-300 mb-1"
              htmlFor={fieldName}
            >
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            </label>
            <Field
              type={fieldName === 'email' ? 'email' : 'text'}
              name={fieldName}
              id={fieldName}
              placeholder={`Your ${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`}
              className="w-full px-3 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-white bg-gray-100 dark:bg-ternary-dark rounded-md shadow-sm text-md :placeholder: margin-left: 2rem mb-2"
              autoComplete={`new-${fieldName}`}
            />
            <ErrorMessage
              name={fieldName}
              component="div"
              className="text-white font-medium text-sm mt-1"
            />
          </div>
        ))}

        <div className="mb-4 col-span-2">
          <label
            className="block text-lg text-white dark:text-gray-300 mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <Field
            as="textarea"
            className="w-full px-3 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-white bg-gray-100 dark:bg-ternary-dark rounded-md shadow-sm text-md resize-none"
            id="message"
            name="message"
            rows="4"
            label="Message"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-white font-medium text-sm mt-1"
          />
        </div>
        </div>
        <div className="col-span-8">
          <Button
            type="submit"
            label="Send Message"
            style={{ background: 'rgba(63, 81, 181, 0.5)' }}
            className="w-full font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-4 duration-500 text-white px-6 py-3 text-lg"
          >
            Send Message
          </Button>
          
        </div>
      </Form>
    </Formik>
  </div>
</div>

  );
};

export default ContactForm;