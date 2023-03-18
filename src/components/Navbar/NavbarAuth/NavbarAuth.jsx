import { NavLink } from 'react-router-dom';

import styles from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <span className={styles.span}>|</span>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
