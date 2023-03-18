import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from 'redux/auth/auth-selrctor';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <></>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
