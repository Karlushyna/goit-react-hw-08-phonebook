import Section from 'shared/components/Section/Section';
import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { ManeBox } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <ManeBox>
      <Section title="Register Page">
        <RegisterForm />
      </Section>
    </ManeBox>
  );
};

export default RegisterPage;
