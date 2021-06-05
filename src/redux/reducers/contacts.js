import * as t from '../const.config'

const initialState = {
    listContacts:[],
    contact:{},
    message:null,
    isLoading:false,
    isSuccess:false,
    isFailed:false

}

const contacts = (state=initialState, action) => {
    switch(action.type){
        case t.LIST_CONTACTS_LOADING:
            return{
                ...state,
                isLoading:true,
                isSuccess:false,
                isFailed:false
            }
        case t.LIST_CONTACTS_SUCCESS:
            return{
                ...state,
                listContacts:action.listContacts,
                isLoading:false,
                isSuccess:true,
                isFailed:false
            }
        case t.LIST_CONTACTS_LOADING:
            return{
                ...state,
                isLoading:false,
                isSuccess:false,
                isFailed:true
            }

        case t.CONTACT_LOADING:
            return{
                ...state,
                isLoading:true,
                isSuccess:false,
                isFailed:false
            }
        case t.CONTACT_SUCCESS:
            return{
                ...state,
                contact:action.data,
                isLoading:false,
                isSuccess:true,
                isFailed:false
            }
        case t.CONTACT_FAILURE:
            return{
                ...state,
                isLoading:false,
                isSuccess:false,
                isFailed:true
            }
        case t.CONTACT_CLEAR:
            return{
                ...state,
                contact:{},
                message:null
            }
        case t.REMOVE_CONTACT_LOADING:
            return{
                ...state,
                isLoading:true,
                isSuccess:false,
                isFailed:false
            }
        case t.REMOVE_CONTACT_SUCCESS:
            return{
                ...state,
                message:action.message,
                isLoading:false,
                isSuccess:true,
                isFailed:false
            }
        case t.REMOVE_CONTACT_FAILURE:
            return{
                ...state,
                message:action.message,
                isLoading:false,
                isSuccess:false,
                isFailed:true
            }
        
        case t.REMOVE_CONTACT_LOADING:
            return{
                ...state,
                isLoading:true,
                isSuccess:false,
                isFailed:false
            }
        case t.REMOVE_CONTACT_SUCCESS:
            return{
                ...state,
                message:action.message,
                isLoading:false,
                isSuccess:true,
                isFailed:false
            }
        case t.REMOVE_CONTACT_FAILURE:
            return{
                ...state,
                message:action.message,
                isLoading:false,
                isSuccess:false,
                isFailed:true
            }
        case t.UPDATE_CONTACT_LOADING:
            return{
                ...state,
                isLoading:true,
                isSuccess:false,
                isFailed:false
            }
        case t.UPDATE_CONTACT_SUCCESS:
            return{
                ...state,
                message:action.message,
                data:action.data,
                isLoading:false,
                isSuccess:true,
                isFailed:false
            }
        case t.UPDATE_CONTACT_FAILURE:
            return{
                ...state,
                message:action.message,
                isLoading:false,
                isSuccess:false,
                isFailed:true
            }
        
        case t.ADD_CONTACT_LOADING:
            return{
                ...state,
                isLoading:true,
                isSuccess:false,
                isFailed:false
            }
        case t.ADD_CONTACT_SUCCESS:
            return{
                ...state,
                message:action.message,
                isLoading:false,
                isSuccess:true,
                isFailed:false
            }
        case t.ADD_CONTACT_FAILURE:
            return{
                ...state,
                message:action.message,
                isLoading:false,
                isSuccess:false,
                isFailed:true
            }
        default:
            return state
    }
}

export {contacts}