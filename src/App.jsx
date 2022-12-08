import React, { Component } from 'react';
import ContactForm from './components/Form';
import ContactList from './components/ListContacts';
import Filter from './components/Filter';
import { PhoneBook, TitleH1, TitleH2 } from 'App.styled';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  findInputId = nanoid();
  formSubmithandle = date => {
    // console.log(this.findInputId);
    const newContacts = this.state.contacts;
    const findIndex = newContacts.findIndex(
      contact => contact.name === date.name
    );
    if (findIndex !== -1) {
      return alert(`${date.name} is already in contacts`);
    }
    newContacts.push(date);
    this.setState({ contacts: newContacts });
    // console.log(this.state.contacts);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    // console.log(this.state.filter);
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <PhoneBook>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onSubmit={this.formSubmithandle} />
        <TitleH2>Contacts</TitleH2>
        <Filter
          idUser={this.findInputId}
          value={this.state.filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contact={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </PhoneBook>
    );
  }
}

export default App;
