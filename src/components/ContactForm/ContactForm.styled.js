import styled from 'styled-components';

export const Form = styled.form`
  border: 2px solid #5446aa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 16px 60px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  width: 370px;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: none;
    border-color: #5446aa;
  }
`;
