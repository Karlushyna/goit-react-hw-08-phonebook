import Section from 'shared/components/Section/Section';
import ColorBox from 'shared/components/ColorBox/ColorBox';

const HomePage = () => {
  return (
    <Section title="Home Page">
      <ColorBox
        text="The Contact Book application uses a backend for user registration and login. After registration, the user can use the Contact Book.
The application has the ability to add, delete, edit and find contacts by name."
      />
    </Section>
  );
};

export default HomePage;
