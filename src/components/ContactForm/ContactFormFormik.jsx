//!    Don`t USE
//?               Formik

import { Formik, Form, Field } from 'formik';

export const ContactForm = ({ onAddContact, contacts }) => {
  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    } else if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      errors.name = 'Name already exists';
    }

    if (!values.number) {
      errors.number = 'Required';
    }

    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <Field type="text" name="name" placeholder="Enter name" />
          {errors.name && <div className="error">{errors.name}</div>}

          <Field type="tel" name="number" placeholder="Enter phone number" />
          {errors.number && <div className="error">{errors.number}</div>}

          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};
