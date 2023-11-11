import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 2px solid grey;
  width: 300px;
`;
export const Label = styled.label``;

export const StyledField = styled(Field)`
  max-width: 120px;
  margin-top: 10px;
  margin-bottom: 8px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
export const AddButton = styled.button`
  margin-top: 10px;
  max-width: 76px;
  font-size: 10px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 1px 10px;
  &:hover {
    background: rgb(240, 240, 240);
  }
`;
export const Box = styled.div`
  padding: 24px;
`;
