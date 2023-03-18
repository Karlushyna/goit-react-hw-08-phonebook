import PropTypes from 'prop-types';
import ButtonClick from '../Buttons/ButtonClick';
import { Name, Number, ButtonsBox } from './ContactItem.styled';
import { ImUserMinus } from 'react-icons/im';
import { AiFillEdit } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const ContactItem = ({ id, name, number, onDeleteContact, showContact }) => {
  return (
    <>
      <div>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </div>
      <ButtonsBox>
        <ButtonClick
          type="button"
          onClick={() => showContact(id, name, number)}
        >
          <IconContext.Provider value={{ color: '#fff', size: '20px' }}>
            <AiFillEdit />
          </IconContext.Provider>
        </ButtonClick>
        <ButtonClick type="button" onClick={() => onDeleteContact(id)}>
          <IconContext.Provider value={{ color: '#fff', size: '20px' }}>
            <ImUserMinus />
          </IconContext.Provider>
        </ButtonClick>
      </ButtonsBox>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
