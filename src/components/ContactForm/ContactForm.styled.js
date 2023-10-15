import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  max-width: 300px;
  padding: 25px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const InputName = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled(Field)`
  height: 32px;
  border-radius: 8px;
`;

export const Btn = styled.button`
  width: fit-content;
  margin-top: 20px;

  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover,
  &:focus {
    background-color: #e8f6f3;
    cursor: pointer;
  }
`;

export const ErrorText = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;
