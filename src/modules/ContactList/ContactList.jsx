import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  fetchDeleteContact,
} from 'redux/contacts/contacts-operations';
import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import ContactItem from 'shared/components/ContactItem/ContactItem';
import Modal from 'shared/components/Modal/Modal';
import ModalForm from 'modules/ModalForm/ModalForm';
import { Item, List } from './ContactList.styled';

const ContactList = () => {
  const [modalContact, setModalContact] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  const showContact = (id, name, number) => {
    const contact = { id, name, number };
    setModalContact(contact);
  };

  const closeModal = () => {
    setModalContact(null);
  };

  const elements = contacts.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <ContactItem
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          showContact={showContact}
          id={id}
        />
        {modalContact && (
          <Modal close={closeModal}>
            <ModalForm contact={modalContact} close={closeModal} />
          </Modal>
        )}
      </Item>
    );
  });

  return <>{contacts.length > 0 && <List>{elements}</List>};</>;
};

export default ContactList;
