import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Btn,
  ErrorText,
  FormWrapper,
  Input,
  InputName,
  ListItem,
} from './ContactForm.styled';

export const ContactForm = ({ onAddContact, contacts }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    number: Yup.string()
      .matches(
        /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values.name, values.number);
        resetForm();
      }}
    >
      {() => (
        <FormWrapper>
          <ul>
            <ListItem>
              <InputName htmlFor="name">Name</InputName>
              <Input type="text" name="name" id="name" />
              <ErrorText name="name" component="div" className="error" />
            </ListItem>
            <ListItem>
              <InputName htmlFor="number">Number</InputName>
              <Input type="tel" name="number" id="number" />
              <ErrorText name="number" component="div" className="error" />
            </ListItem>
          </ul>

          <Btn type="submit">Add contact</Btn>
        </FormWrapper>
      )}
    </Formik>
  );
};
