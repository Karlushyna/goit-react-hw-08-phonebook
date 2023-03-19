import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/operations';
import RegisterForm from 'components/RegisterForm/RegisterForm';

import styles from './register.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2 className={styles.title}>Sign up to create profile</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;
