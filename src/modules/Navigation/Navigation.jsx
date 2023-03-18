import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selrctor';
import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationUser from './NavigationUser/NavigationUser';
import { NavBar } from './Navigation.styled';

const Navigation = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <NavBar>
      {!isLogin && <NavigationAuth />}
      {isLogin && <NavigationUser />}
    </NavBar>
  );
};

export default Navigation;
