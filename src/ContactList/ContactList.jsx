import PropTypes from 'prop-types';

import Button from '../Button';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  if (!contacts.length) {
    return null;
  }

  const elements = contacts.map(({ name, id, number }) => {
    return (
      <li key={id} className={styles.list}>
        {name}: {number} <Button id={id} type="button" text="Delete" onClick={onClick} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
};
