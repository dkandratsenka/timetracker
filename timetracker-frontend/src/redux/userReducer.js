import {USERS_LOADING,USERS_ERROR,USERS_FETCH, USERS_SORT_BY_DATE} from "./action/actionTypes";

const initialState = {
    isLoading: true,
    error: null,
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USERS_LOADING:
            return {...state, isLoading: true, error: null, users: []}
        case USERS_ERROR:
            return {...state, isLoading: false, error: action.payload, users: []}
        case USERS_FETCH:
            return {...state, isLoading: false, error: null, users: action.payload}
        case USERS_SORT_BY_DATE:
            return {...state, isLoading: false, error: null, users: action.payload}
        case USERS_SORT_BY_DATE:
            return {...state, isLoading: false, error: null, users: action.payload}
        default:
            return state;
    }
}