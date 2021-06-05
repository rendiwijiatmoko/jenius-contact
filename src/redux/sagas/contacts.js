import { takeEvery, call, put } from 'redux-saga/effects'
import * as t from '../const.config'
import Axios from '../../utils/server'

export const Contacts = [
    takeEvery(t.LIST_CONTACTS_LOADING, workerContacts),
    takeEvery(t.ADD_CONTACT_LOADING, workerAddContact),
    takeEvery(t.CONTACT_LOADING, workerContact),
    takeEvery(t.REMOVE_CONTACT_LOADING, workerRemoveContact),
    takeEvery(t.UPDATE_CONTACT_LOADING, workerUpdateContact),
]

const listContacts = async () => {
    try {
        const data = await Axios({
            method:'GET',
            url: '/contact',
        })
        return data
    } catch (error) {
        return error
    }
}

const addContact = async (body) => {
    try {
        const data = await Axios({
            method:'POST',
            url: '/contact',
            data:body
        })
        return data
    } catch (error) {
        return error
    }
}

const contact = async (id) => {
    try {
        const data = await Axios({
            method:'GET',
            url: `/contact/${id}`,
        })
        return data
    } catch (error) {
        return error
    }
}

const removeContact = async (id) => {
    try {
        const data = await Axios({
            method:'DELETE',
            url: `/contact/${id}`,
        })
        return data
    } catch (error) {
        return error
    }
}

const updateContact = async (props) => {
    try {
        const data = await Axios({
            method:'PUT',
            url: `/contact/${props.id}`,
            data:props.body
        })
        return data
    } catch (error) {
        return error
    }
}


function* workerContacts(action) {
    try {
        const response = yield call(listContacts, action.payload)
        if (response.status === 200) {
            yield put({
                type: t.LIST_CONTACTS_SUCCESS,
                listContacts: response.data.data
            })
        } else {
            throw response
        }
    } catch (error) {
        yield put({
            type: t.LIST_CONTACTS_FAILURE,
            message: error?.data?.message
        })
    }
}

function* workerAddContact(action) {
    try {
        const response = yield call(addContact, action.payload)
        if (response.status === 201) {
            yield put({
                type: t.ADD_CONTACT_SUCCESS,
                message: response.data.message
            })
        } else {
            throw response
        }
    } catch (error) {
        yield put({
            type: t.ADD_CONTACT_FAILURE,
            message: "error"
        })
    }
}

function* workerContact(action) {
    try {
        const response = yield call(contact, action.payload)
        if (response.status === 200) {
            yield put({
                type: t.CONTACT_SUCCESS,
                data: response.data.data
            })
        } else {
            throw response
        }
    } catch (error) {
        yield put({
            type: t.CONTACT_FAILURE,
            message: error?.data?.message
        })
    }
}

function* workerRemoveContact(action) {
    try {
        const response = yield call(removeContact, action.payload)
        if (response.status === 400) {
            yield put({
                type: t.REMOVE_CONTACT_SUCCESS,
                message:response?.data?.message?response.data.message:'contact deleted'
            })
        } else {
            throw response
        }
    } catch (error) {
        yield put({
            type: t.REMOVE_CONTACT_FAILURE,
            message: 'contact unavailable'
        })
    }
}

function* workerUpdateContact(action) {
    try {
        const response = yield call(updateContact, action.payload)
        if (response.status === 201) {
            yield put({
                type: t.UPDATE_CONTACT_SUCCESS,
                data: response.data.data,
                message: response.data.message
            })
        } else {
            throw response
        }
    } catch (error) {
        yield put({
            type: t.UPDATE_CONTACT_FAILURE,
            message: 'failed updated'
        })
    }
}