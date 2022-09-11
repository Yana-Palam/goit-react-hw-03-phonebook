import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  width: 340px;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: none;
    border-color: #5446aa;
  }
`;
