import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/operations';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>If you already have a previously created profile, log in using it</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;
