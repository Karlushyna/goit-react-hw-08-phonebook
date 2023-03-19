import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { getLoadingStatus } from 'redux/contacts/selectors';

import styles from './mycontacts.module.css';

const MyContacts = () => {
  const loadingStatus = useSelector(getLoadingStatus);

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={styles.title}>Contacts</h2>
      <ContactsFilter />
      {loadingStatus && <Loader />}
      <ContactList />
    </div>
  );
};

export default MyContacts;
