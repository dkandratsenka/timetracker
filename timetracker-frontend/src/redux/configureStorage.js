import { createStore } from 'redux'
import { userReducer } from './userReducer';

export const configureStore = () => {
    const store = createStore(userReducer);

    return store;
}