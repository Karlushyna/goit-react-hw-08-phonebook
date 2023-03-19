import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.css';

export const NavbarAuth = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/register" className={styles.link}>
        Sign Up
      </NavLink>
      <span className={styles.span}>|</span>
      <NavLink to="/login" className={styles.link}>
        Log In
      </NavLink>
    </div>
  );
};


