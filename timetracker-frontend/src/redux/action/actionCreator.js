import { fetchUsersURL } from "../../utility/urlForFetch";
import { actionUserError, actionUserLoading, actionUserFetch } from "./actionUsers";

export const fetchUsers = page => dispatch => {
    dispatch(actionUserLoading());

    return fetch(fetchUsersURL + page).then(response => {
                                                if(response.ok)
                                                    return response;
                                                else{
                                                    let error = new Error("Error: " + response.status + ": " + response.statusText );
                                                    throw error;
                                                }
                                }, erorrMessage => {
                                                let error = new Error(erorrMessage.message);
                                                throw error;
                                            })
                            .then(response => response.json())
                            .then(body => dispatch(actionUserFetch(body.object)))
                            .catch(error => dispatch(actionUserError(error)))
}