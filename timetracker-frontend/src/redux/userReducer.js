import {COLUMN_NAME,COLUMN_NUMBER,COLUMN_CHECKBOX} from "../utility/constant";

const initialState = [{
    [COLUMN_NAME]: "Vlad",
    [COLUMN_NUMBER]: 1234,
    [COLUMN_CHECKBOX]: true
},{
    [COLUMN_NAME]: "Bob",
    [COLUMN_NUMBER]: 1234,
    [COLUMN_CHECKBOX]: false
},{
    [COLUMN_NAME]: "Jon",
    [COLUMN_NUMBER]: 1234,
    [COLUMN_CHECKBOX]: true
}]

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}