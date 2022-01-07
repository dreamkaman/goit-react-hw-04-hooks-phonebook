import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Section from './Section';
import ContactList from './ContactList';
import InputElement from './ContactForm/InputElement';

import styles from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function isContactExist(name) {
    return !!contacts.find(contact => contact.name.toUpperCase().includes(name.toUpperCase()));
  }

  function filterContacts() {
    return contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));
  }

  const handleDelete = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);

    setContacts(newContacts);
    // setFilter('');
  };

  //Обработчик события
  const addContact = (name, number) => {
    if (isContactExist(name)) {
      alert(`${name} is already in contacts!`);

      return;
    }

    const id = nanoid();

    setContacts(prevstate => [...prevstate, { id, name, number }]);
    setFilter('');
  };

  const handleChange = event => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('contacts'));
    if (arr?.length) {
      setContacts(arr);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onFormSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <InputElement
          className={styles.filter}
          name="filter"
          type="text"
          value={filter}
          text="Find contacts by name"
          onChange={handleChange}
        />
        <ContactList contacts={filterContacts()} onClick={handleDelete} />
      </Section>
    </>
  );
}

export default App;
