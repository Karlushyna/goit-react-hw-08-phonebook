import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactItem from './ContactItem/ContactItem';
import { getFilteredContacts } from 'redux/contacts/selectors';

import styles from './contact-list.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const inContacts = Boolean(filteredContacts.length);

  return (
    <div>
      {inContacts && (
        <ul className={styles.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
      {!inContacts && <p>No contacts in list, yet</p>}
    </div>
  );
};

export default ContactList;
