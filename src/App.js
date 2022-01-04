import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import Section from './Section';
import ContactList from './ContactList';
import InputElement from './ContactForm/InputElement';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isContactExist(name) {
    return !!this.state.contacts.find(contact =>
      contact.name.toUpperCase().includes(name.toUpperCase()),
    );
  }

  filterContacts(text) {
    return this.state.contacts.filter(contact =>
      contact.name.toUpperCase().includes(text.toUpperCase()),
    );
  }

  handleDelete = event => {
    const newContacts = this.state.contacts.filter(contact => contact.id !== event.target.id);

    this.setState({ contacts: newContacts, filter: '' });
  };

  //Обработчик события
  addContact = (name, number) => {
    if (this.isContactExist(name)) {
      alert(`${name} is already in contacts!`);

      return;
    }

    const id = nanoid();

    this.setState(prevstate => ({
      contacts: [...prevstate.contacts, { id, name, number }],
      filter: '',
    }));
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  componentDidMount() {
    const arr = JSON.parse(localStorage.getItem('contacts'));
    if (arr?.length) {
      this.setState({ contacts: arr });
    }
  }

  componentDidUpdate(prevprops, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onFormSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <InputElement
            className={styles.filter}
            name="filter"
            type="text"
            value={this.state.filter}
            text="Find contacts by name"
            onChange={this.handleChange}
          />
          <ContactList
            name={this.state.name}
            contacts={this.filterContacts(this.state.filter)}
            onClick={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}

export default App;
