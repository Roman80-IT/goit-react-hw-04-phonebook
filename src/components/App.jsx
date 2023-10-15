import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

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

    this.setState({
      contacts: [...contacts, newContact],
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Layout>
        <h1>Phonebook</h1>

        {/* Компонент ContactForm для форми додавання контактів */}
        <ContactForm
          onAddContact={this.handleAddContact}
          contacts={contacts} // Передаємо список контактів у ContactForm (крок 5)
        />

        <h2>Contacts</h2>

        <Filter filter={filter} onFilterChange={this.handleFilterChange} />

        {/* Компонент ContactList для списку контактів */}
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContact={this.handleDeleteContact} // Передаємо ф-цію для видалення контакту
        />
        <GlobalStyle></GlobalStyle>
      </Layout>
    );
  }
}
