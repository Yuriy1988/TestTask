import { push } from 'react-router-redux';

export const ADD_MANY = 'CONTACTS/ADD_MANY';
export const ADD_ONE = 'CONTACTS/ADD_ONE';
export const SELECT = 'CONTACTS/SELECT';
export const REMOVE = 'CONTACTS/REMOVE';
export const UPDATE = 'CONTACTS/UPDATE';


const addContacts = payload => ({
  type: ADD_MANY,
  payload,
});

const addContact = payload => ({
  type: ADD_ONE,
  payload,
});

const updateContact = payload => ({
  type: UPDATE,
  payload,
});

export const selectContact = payload => ({
  type: SELECT,
  payload,
});

export const removeContact = payload => ({
  type: REMOVE,
  payload,
});

export const fetchContacts = () => {
  return (dispatch, state, api) => {
    return api('contacts', 'get')
      .then(response => dispatch(addContacts(response)))
      .catch(() => dispatch(push('/error')));
  };
};

export const createContact = (payload) => {
  return (dispatch, state, api) => {
    return api('contacts', 'post', payload)
      .then(response => dispatch(addContact(response)))
      .catch(() => dispatch(push('/error')));
  };
};

export const editContact = (payload) => {
  return (dispatch, state, api) => {
    return api(`contacts/${payload.id}`, 'put', payload)
      .then(response => dispatch(updateContact(response)))
      .catch(() => dispatch(push('/error')));
  };
};

export const deleteContact = (id) => {
  return (dispatch, state, api) => {
    return api(`contacts/${id}`, 'delete')
      .then(response => dispatch(removeContact(response.id)))
      .catch(() => dispatch(push('/error')));
  };
};

