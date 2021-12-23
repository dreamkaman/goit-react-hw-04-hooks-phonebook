import PropTypes from 'prop-types';

const Button = ({ type, text, id, onClick }) => {
  return (
    <button id={id} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
