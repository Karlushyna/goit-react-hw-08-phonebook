import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';

import styles from './user-menu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch;
    const { user } = useAuth;

    return (
        <div className={styles.wrapper}>
        <p className={styles.username}>
          Welcome, <span className={styles.logInUser}>{user.name}</span>
        </p>
        <button
          className={styles.btnLogin}
          type="button"
          onClick={() => dispatch(logOut())}
        >
          Logout
          <span class="material-symbols-outlined">login</span>
        </button>
      </div>
    )
}
