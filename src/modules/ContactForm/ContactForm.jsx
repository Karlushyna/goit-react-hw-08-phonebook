import { useDispatch } from 'react-redux';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import { fetchAddContact } from 'redux/contacts/contacts-operations';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
import ButtonSubmit from 'shared/components/Buttons/ButtonSubmit';
import { Form } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(fetchAddContact(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, number } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={number} handleChange={handleChange} {...fields.number} />
      <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    </Form>
  );
};

export default ContactForm;
