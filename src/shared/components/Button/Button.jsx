import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({ onClick, children, type = 'submit' }) => {
  return (
    <button onClick={onClick} type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};
