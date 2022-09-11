import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './ContactListItem.styled';
import Button from 'components/Button';
import Avatar from 'react-avatar';

const ContactListItem = ({ name, number, onDelete }) => {
  return (
    <>
      <Avatar size="40" name={name} round={true} />
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={onDelete} children="Delete" type="button" />
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
