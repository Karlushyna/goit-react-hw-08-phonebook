import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Create a new profile to use our service</h2>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;