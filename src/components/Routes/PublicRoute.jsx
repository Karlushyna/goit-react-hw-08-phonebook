import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'redux/auth/selectors';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>LOADING USER DATA</p>;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return <Outlet />;
};

export default PublicRoute;
