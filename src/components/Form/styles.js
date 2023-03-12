import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  max-width: 400px,
  margin: 0px 50px,
`;

export const Label = styled.label`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid black;
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: #0077ff;
  color: #ffffff;
`;

export const Error = styled.span`
  color: #ff0000;
  margin-bottom: 8px;
`;

export const P = styled.p`
  display: flex;
  flex-direction: column;
  color: red;
  margin-bottom: 8px;
`;
