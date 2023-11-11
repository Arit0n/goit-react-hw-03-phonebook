import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  StyledField,
  StyledError,
  AddButton,
  Label,
} from './ContactForm.styled';

const validSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Дуже коротке!')
    .max(50, 'Надто довге!')
    .required('Заповни поле'),
  number: Yup.string()
    .min(5, 'Дуже короткий!')
    .max(12, 'Надто довгий!')
    .required('Заповни поле'),
});

export const ContactForm = ({ onAdd }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validSchema}
      onSubmit={(values, actions) => {
        console.log(values, actions);
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label htmlFor="name">Name</Label>
        <StyledField id="firstName" name="name" placeholder="Oleh Kovalenko " />
        <StyledError name="name" component="span" />
        <Label htmlFor="number">Number</Label>
        <StyledField
          type="tel"
          id="lastName"
          name="number"
          placeholder="235-34-56"
        />
        <StyledError name="number" component="span" />
        <AddButton type="submit">Add contact</AddButton>
      </StyledForm>
    </Formik>
  </div>
);
