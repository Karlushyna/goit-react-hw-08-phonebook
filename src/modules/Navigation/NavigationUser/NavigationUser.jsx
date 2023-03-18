import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selrctor';
import ButtonLogout from 'shared/components/Buttons/ButtonLogout';
import { UserBar, User, Link, List, UserBox } from '../Navigation.styled';

const NavigationUser = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <UserBar>
      <UserBox>
        <User>{email}</User>
        <ButtonLogout onClick={onLogout} type="button">
          Logout
        </ButtonLogout>
      </UserBox>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </List>
    </UserBar>
  );
};

export default NavigationUser;
