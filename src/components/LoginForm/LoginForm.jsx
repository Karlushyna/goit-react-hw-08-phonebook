import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import PropTypes from 'prop-types';

import styles from './loginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
