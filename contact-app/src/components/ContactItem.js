import React from 'react';

const ContactItem = ({ contact }) => {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
};

export default ContactItem;
