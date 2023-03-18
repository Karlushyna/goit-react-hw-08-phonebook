import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

import styles from './homePage.module.css';

const HomePage = () => {
  const isLogin = useSelector(isUserLogin);
  const { email } = useSelector(getUser);
  return (
    <>
      {!isLogin ? (
        <h1 className={styles.titleLoggedIn}>
          Welcome! Please login to your account or register to be able to use
          the contact book
        </h1>
      ) : (
        <h1 className={styles.titleNotLoggedIn}>
          Congratulations! You are logged in as{' '}
          <span className={styles.span}>{email}</span>. You have access to all
          the contacts you saved before, as well as many other options, such as
          adding new contacts, searching for a contact by name or phone number,
          and deleting old contacts.
        </h1>
      )}
    </>
  );
};

export default HomePage;
