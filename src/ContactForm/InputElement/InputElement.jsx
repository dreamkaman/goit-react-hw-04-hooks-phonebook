import PropTypes from 'prop-types';

import styles from './InputElement.module.css';

const InputElement = ({ text, value, type, name, pattern, title, onChange }) => {
  return (
    <div className={styles.block}>
      <label className={styles.label} htmlFor="name">
        {text}
      </label>
      <input
        value={value}
        className={styles.input}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default InputElement;

InputElement.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
};
