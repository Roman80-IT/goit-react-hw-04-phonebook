import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleAddContact = (name, number) => {
    const isNameExist = contacts.some(contact => contact.name === name);

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    if (name.trim() === '' || number.trim() === '') {
      alert('Name and phone number are required fields.');
      return;
    }

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    setContacts([...contacts, newContact]);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <Layout>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={handleAddContact} contacts={contacts} />

      <h2>Contacts</h2>

      <Filter filter={filter} onFilterChange={handleFilterChange} />

      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
      <GlobalStyle></GlobalStyle>
    </Layout>
  );
};
