import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button/Button';
import { logout } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

import styles from './user-menu.module.css';

export const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <span className={styles.userName}>{email}</span>
      <Button onClick={onLogout}>Log Out</Button>
    </div>
  );
};


