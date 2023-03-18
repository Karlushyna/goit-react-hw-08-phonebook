import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/operations';

export const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{children}</>;
};


