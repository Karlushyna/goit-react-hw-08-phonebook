import PropTypes from 'prop-types';
import TextArea from 'components/TextArea/TextArea';
import Button from 'components/Button/Button';
import { useForm } from 'components/hooks/useForm';
import { fields } from './fields';
import { initialState } from './initialState';

import styles from './login.module.css';

export const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextArea value={email} handleChange={handleChange} {...fields.email} />
      <TextArea
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Enter</Button>
    </form>
  );
};



LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
