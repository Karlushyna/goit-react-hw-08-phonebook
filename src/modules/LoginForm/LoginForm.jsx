import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';
import TextField from 'shared/components/TextField/TextField';
import fields from './fields';
import ButtonSubmit from 'shared/components/Buttons/ButtonSubmit';
import { Form } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(login(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <ButtonSubmit type="submit">Login</ButtonSubmit>
    </Form>
  );
};

export default LoginForm;
