import {USERS_LOADING,USERS_ERROR, USERS_FETCH, USERS_SORT_BY_DATE, USER_UPDATE} from "./actionTypes"

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

export const actionUserSortByDate = (users) => ({
    type: USERS_SORT_BY_DATE,
    payload: users
})

export const actionUserUpdate = (user) => ({
    type: USER_UPDATE,
    payload: user
})