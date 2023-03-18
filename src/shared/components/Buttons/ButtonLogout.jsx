import PropTypes from 'prop-types';
import { BtnLogout } from './Button.styled.js';

const ButtonLogout = ({ children, type, onClick }) => {
  return (
    <BtnLogout onClick={onClick} type={type}>
      {children}
    </BtnLogout>
  );
};

export default ButtonLogout;

ButtonLogout.propTypes = {
  children: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  onClick: PropTypes.func.isRequired,
};
