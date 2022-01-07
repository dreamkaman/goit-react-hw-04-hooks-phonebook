import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import InputElement from './InputElement';
import Button from '../Button';

import styles from './ContactForm.module.css';

function ContactForm({ onFormSubmit }) {
  const [contacts, setContacts] = useState({ name: '', number: '' });

  const { name, number } = contacts;

  const handleChange = event => {
    const key = event.target.name;
    setContacts(prevstate => ({ ...prevstate, [key]: event.target.value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(name, number);
    setContacts({ name: '', number: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputElement
        value={name}
        text="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
      />
      <InputElement
        value={number}
        text="Number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
      />
      <Button type="submit" text="Add contacts" />
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
