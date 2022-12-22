import React, { useState, useEffect } from 'react';
import ContactForm from './components/Form';
import ContactList from './components/ListContacts';
import Filter from './components/Filter';
import { PhoneBook, TitleH1, TitleH2, Message } from 'App.styled';
import { nanoid } from 'nanoid';

const CONTACTS_KEY = 'contact_database';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedState = localStorage.getItem(CONTACTS_KEY);
    let parseState;
    try {
      parseState = JSON.parse(savedState) ?? initialContacts;
    } catch (error) {
      parseState = [];
    }
    setContacts(parseState);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmithandle = contact => {
    const isInConacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInConacts) {
      return alert(`${contact.name} is already in contacts`);
    }
    const newContact = { ...contact, id: nanoid() };
    setContacts(prevState => [...prevState, newContact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(oldContact =>
      oldContact.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <PhoneBook>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onSubmit={formSubmithandle} />
      <TitleH2>Contacts</TitleH2>
      {contacts.length === 0 ? (
        <Message>Your phone book is empty, add a contact</Message>
      ) : (
        <>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contact={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </>
      )}
    </PhoneBook>
  );
};

export default App;
