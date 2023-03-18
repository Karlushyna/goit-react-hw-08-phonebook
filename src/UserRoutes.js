import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from 'components/Routes/PublicRoute';
import PrivateRoute from 'components/Routes/PrivateRoute';

const HomePage = lazy(() => import('./pages/Home/Home'));
const RegisterPage = lazy(() => import('./pages/Register/Register'));
const MyContactsPage = lazy(() => import('./pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('./pages/Login/Login'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<MyContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
