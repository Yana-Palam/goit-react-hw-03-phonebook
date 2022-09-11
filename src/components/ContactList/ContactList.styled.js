import styled from 'styled-components';

export const Contact = styled.li`
  border: 2px solid #5446aa;
  border-radius: 4px;
  padding: 6px 12px;
  min-width: 490px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  font-size: 24px;
  list-style: none;
`;
