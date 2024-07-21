import React, { useState } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div>
      <h1>Contact App</h1>
      <AddContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
