import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';
import { List, Contact } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactListItem
            name={name}
            number={number}
            onDelete={() => {
              onDeleteContact(id);
            }}
          />
        </Contact>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
