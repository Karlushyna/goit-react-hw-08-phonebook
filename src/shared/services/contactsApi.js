import instance from './authApi';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const editContact = async ({ id, name, number }) => {
  const data = { name, number };
  const { data: result } = await instance.patch(`/contacts/${id}`, data);
  return result;
};
