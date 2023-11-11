import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Form/ContactForm.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  updateFilter = filterValue => {
    this.setState(prevState => {
      return { filter: filterValue };
    });
  };

  updateContacts = values => {
    if (
      this.state.contacts.some(
        value =>
          value.name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
    } else {
      const list = { ...values, id: nanoid() };

      this.setState(prevState => {
        return { contacts: [...prevState.contacts, list] };
      });
    }
  };

  deleteContact = id => {
    this.setState(pervState => {
      return {
        contacts: pervState.contacts.filter(contact => contact.id !== id),
      };
    });
  };
  
  render() {
    const visibleNames = this.state.contacts.filter(item => {
      const hasNames = item.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());

      return hasNames;
    });
    return (
      <Box>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.updateContacts} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <ContactList onDelete={this.deleteContact} contacts={visibleNames} />
        <GlobalStyle />
      </Box>
    );
  }
}
