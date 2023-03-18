import { List, Link } from '../Navigation.styled';

const NavigationAuth = () => {
  return (
    <List>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="register">Register</Link>
      </li>
      <li>
        <Link to="login">Login</Link>
      </li>
    </List>
  );
};

export default NavigationAuth;
