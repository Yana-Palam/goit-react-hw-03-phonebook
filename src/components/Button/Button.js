import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ children, type, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
