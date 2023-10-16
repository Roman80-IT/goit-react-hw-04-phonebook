import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

// export class App extends Component {
export const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts) {
  //     this.setState({ contacts: JSON.parse(savedContacts) });
  //   }
  // }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // handleFilterChange = event => {
  //   this.setState({ filter: event.target.value });
  // };
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  // handleAddContact = (name, number) => {
  const handleAddContact = (name, number) => {
    //   const { contacts } = this.state;
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

    // this.setState({
    //   contacts: [...contacts, newContact],
    // });
    setContacts([...contacts, newContact]);
  };

  const getFilteredContacts = () => {
    //   const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    // const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    // this.setState({ contacts: updatedContacts });
    setContacts(updatedContacts);
  };

  // render() {
  // const { contacts, filter } = this.state;

  return (
    <Layout>
      <h1>Phonebook</h1>

      {/* Компонент ContactForm для форми додавання контактів */}
      <ContactForm
        onAddContact={handleAddContact}
        contacts={contacts} // Передаємо список контактів у ContactForm (крок 5)
      />

      <h2>Contacts</h2>

      <Filter filter={filter} onFilterChange={handleFilterChange} />

      {/* Компонент ContactList для списку контактів */}
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact} // Передаємо ф-цію для видалення контакту
      />
      <GlobalStyle></GlobalStyle>
    </Layout>
  );
  // }
};

function initialContacts() {
  return JSON.parse(localStorage.getItem('contacts')) || [];
}
