import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
import Spinner from 'shared/components/Spinner/Spinner';
import Layout from 'modules/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const PhoneBookPage = lazy(() => import('pages/PhoneBookPage/PhoneBookPage'));

const UserRoutes = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<PhoneBookPage />} />
            </Route>
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
      <NotificationContainer />
    </>
  );
};

export default UserRoutes;
