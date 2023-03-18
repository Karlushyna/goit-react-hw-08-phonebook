import { NavLink } from 'react-router-dom';
import styles from './auth-nav.module.css';

export const AuthNav = () => {
    return (
        <div>
      <NavLink className={styles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Log In
      </NavLink>
    </div>
    )
}

