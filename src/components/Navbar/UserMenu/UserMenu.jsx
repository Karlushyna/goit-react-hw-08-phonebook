import styles from './userMenu.module.css';
import Button from 'shared/components/Button/Button';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span className={styles.userName}>{email}</span>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default UserMenu;
