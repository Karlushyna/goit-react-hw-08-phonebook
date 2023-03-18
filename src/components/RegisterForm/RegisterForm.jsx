import PropTypes from 'prop-types';
import TextArea from 'components/TextArea/TextArea';
import Button from 'components/Button/Button';
import { useForm } from 'components/hooks/useForm';
import fields from './fields';
import initialState from './initialState';

import styles from './register-form.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextArea value={name} handleChange={handleChange} {...fields.name} />
      <TextArea value={email} handleChange={handleChange} {...fields.email} />
      <TextArea
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
