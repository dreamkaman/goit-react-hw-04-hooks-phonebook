import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import InputElement from './InputElement';
import Button from '../Button';

import styles from './ContactForm.module.css';

function ContactForm({ onFormSubmit }) {
  // state = {
  //   name: '',
  //   number: '',
  // };
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function resetFormState() {
    // this.setState({
    //   name: '',
    //   number: '',
    // });
    setName('');
    setNumber('');
  }

  const handleChange = event => {
    const key = event.target.name;
    // this.setState({
    //   [key]: event.target.value,
    // });
    switch (key) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(name, number);
    resetFormState();
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
