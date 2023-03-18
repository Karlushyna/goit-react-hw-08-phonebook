import { NavLink } from 'react-router-dom';
import { useAuth } from 'components/hooks';

import styles from './navigation.module.css';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={styles.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    )
}