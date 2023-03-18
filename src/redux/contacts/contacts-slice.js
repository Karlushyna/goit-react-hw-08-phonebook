import { createSlice } from '@reduxjs/toolkit';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {
  fetchContacts,
  fetchDeleteContact,
  fetchAddContact,
  fetchEditContact,
} from './contacts-operations';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const handlePending = store => {
  store.loading = true;
  store.error = null;
};

const handleRejected = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
  const error = payload ? payload : 'Sorry... Something went wrong...';
  NotificationManager.error(error);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.contacts = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchDeleteContact.pending, handlePending)
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.contacts.findIndex(
          contact => contact.id === payload
        );
        store.contacts.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, handleRejected)
      .addCase(fetchAddContact.pending, handlePending)
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.contacts = [payload, ...store.contacts];
      })
      .addCase(fetchAddContact.rejected, handleRejected)
      .addCase(fetchEditContact.pending, handlePending)
      .addCase(fetchEditContact.fulfilled, (store, { payload }) => {
        store.loading = false;
        const newContacts = store.contacts.map(contact =>
          contact.id === payload.id ? payload : contact
        );

        store.contacts = [...newContacts];
      })
      .addCase(fetchEditContact.rejected, handleRejected);
  },
});

export default contactsSlice.reducer;
