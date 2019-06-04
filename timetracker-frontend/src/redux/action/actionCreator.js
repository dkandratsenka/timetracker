import { fetchUsersURL,fetchUsersSortURL,fetchUserUpdate } from "../../utility/urlForFetch";
import { actionUserError, actionUserLoading, actionUserFetch, actionUserSortByDate } from "./actionUsers";
import {fetchTo} from "../../utility/fetchTo";

var params = {
    method: "GET",
    body: null,
    headers: {
        "Content-Type" : "application/json"
    },
    credentials: "same-origin"
}

export const fetchUsers = () => dispatch => {
    dispatch(actionUserLoading());

    return fetchTo(fetchUsersURL, params)
                                        .then(body => dispatch(actionUserFetch(body.object)))
                                        .catch(error => dispatch(actionUserError(error)))
}

export const fetchUsersSortByDate = (start, end) => dispatch => {
    
    return fetchTo(fetchUsersSortURL + start + "&end="+end, params)
                                        .then(body => dispatch(actionUserSortByDate(body.object)))
                                        .catch(error => dispatch(actionUserError(error)))
}

export const fetchUpdateUser = (user) => dispatch => {
    params.method = "POST";
    params.body = JSON.stringify(user);

    return fetchTo(fetchUserUpdate, params)
                                        .catch(error => dispatch(actionUserError(error)))
}