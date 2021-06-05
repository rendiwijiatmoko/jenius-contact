import { CONTACT_LOADING, LIST_CONTACTS_LOADING, CONTACT_CLEAR, REMOVE_CONTACT_LOADING, UPDATE_CONTACT_LOADING, ADD_CONTACT_LOADING } from "../const.config";

export const getListContacts = () => ({
    type: LIST_CONTACTS_LOADING
})

export const addContact = (data) => ({
    type: ADD_CONTACT_LOADING,
    payload:data
})

export const getContact = (data) => ({
    type: CONTACT_LOADING,
    payload:data
})

export const removeContact = (data) => ({
    type: REMOVE_CONTACT_LOADING,
    payload:data
})

export const updateContact = (data) => ({
    type: UPDATE_CONTACT_LOADING,
    payload:data
})

export const clearContact = () => ({
    type: CONTACT_CLEAR,
})