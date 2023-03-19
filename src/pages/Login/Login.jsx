import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { LoginForm } from 'components/LoginForm/LoginForm';

import styles from './login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2 className={styles.title}>Log in to use your Phonebook application</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;


