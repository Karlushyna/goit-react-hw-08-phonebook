import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
import ButtonSubmit from 'shared/components/Buttons/ButtonSubmit';
import { Form } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(signup(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <ButtonSubmit type="submit">Register</ButtonSubmit>
    </Form>
  );
};

export default RegisterForm;
