import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Wrapper, Label, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  const findInputId = nanoid();
  return (
    <Wrapper>
      <Label htmlFor={findInputId}>Find contacts by name</Label>
      <Input id={findInputId} type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
