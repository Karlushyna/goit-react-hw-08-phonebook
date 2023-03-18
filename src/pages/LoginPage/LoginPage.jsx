import Section from 'shared/components/Section/Section';
import LoginForm from 'modules/LoginForm/LoginForm';
import { ManeBox } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <ManeBox>
      <Section title="Login Page">
        <LoginForm />
      </Section>
    </ManeBox>
  );
};

export default LoginPage;
