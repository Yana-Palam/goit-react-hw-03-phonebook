import styled from 'styled-components';

export const ButtonStyled = styled.button`
  max-width: 120px;
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  background-color: #5446aa;
  color: #ffffff;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #7968e7;
  }
`;
