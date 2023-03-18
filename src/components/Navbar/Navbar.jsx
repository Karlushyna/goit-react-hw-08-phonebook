import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth.jsx';
import UserMenu from './UserMenu/UserMenu';

import items from './menuItems';

import { isUserLogin } from 'redux/auth/auth-selectors';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  const filteredItems = !isLogin ? items.filter(item => !item.private) : items;

  const elements = filteredItems.map(({ id, link, text }) => {
    return (
      <li key={id}>
        <NavLink to={link} className={styles.link}>
          {text}
        </NavLink>
      </li>
    );
  });

  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>{elements}</ul>
      {!isLogin ? <NavbarAuth /> : <UserMenu />}
    </div>
  );
};

export default Navbar;
