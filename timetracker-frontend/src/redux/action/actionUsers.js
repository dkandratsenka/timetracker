import {USERS_LOADING,USERS_ERROR, USERS_FETCH} from "./actionTypes"

export const actionUserLoading = () => ({
    type: USERS_LOADING,
});

export const actionUserError = (error) => ({
    type: USERS_ERROR,
    payload: error
});

export const actionUserFetch = (users) => ({
    type: USERS_FETCH,
    payload: users
})