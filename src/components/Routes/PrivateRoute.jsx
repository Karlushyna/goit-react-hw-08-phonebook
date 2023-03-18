import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectors';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...LOADING USER DATA</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
