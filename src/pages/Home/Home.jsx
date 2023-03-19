import { isUserLogin } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/selectors';

import styles from './home.module.css';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const { email } = useSelector(getUser);
  return (
    <>
      {!isLogin ? (
        <div className={styles.title}>
          <p>Welcome back to Phonebook application!</p> 
          <p>Please log in or sign up to start </p>  
        </div>
      ) : (
        <div className={styles.titleLoggedIn}>
        <p>Hello, You are successfully logged in as {' '} 
          <span className={styles.span}>{email}</span>. </p> 
        <p>
        Phonebook application was created to help You quickly looking up contact information
          without having to manually search through paper records or address books.</p>  
        <p>Organize Your contacts and always stay in touch</p>
        </div>
      )}
    </>
  );
};

export default HomePage;
