import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEditContact } from 'redux/contacts/contacts-operations';
import fields from './fields';
import ButtonSubmit from 'shared/components/Buttons/ButtonSubmit';
import TextField from 'shared/components/TextField/TextField';

const ModalForm = ({ contact, close }) => {
  const [state, setState] = useState({ ...contact });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchEditContact(state));
    setState({});
    close();
  };

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField
        value={number}
        handleChange={handleChange}
        {...fields.number}
      />
      <ButtonSubmit type="submit">Save contact</ButtonSubmit>
    </form>
  );
};

export default ModalForm;

ModalForm.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  close: PropTypes.func.isRequired,
};
