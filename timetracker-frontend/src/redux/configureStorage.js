import { createStore,applyMiddleware } from 'redux'
import { userReducer } from './userReducer';
import thunk from 'redux-thunk'

export const configureStore = () => {
    const store = createStore(userReducer, applyMiddleware(thunk));

    return store;
}