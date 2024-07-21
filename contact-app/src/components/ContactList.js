import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
