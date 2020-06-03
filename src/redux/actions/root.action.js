import { ADD_OPTION, CREATE_COMPONENT,
     CLEAR_OPTION, DELETE_COMPONENT } from './actionTypes';

export const addOptions = (value) => {
    return {
        type: ADD_OPTION,
        value,
    }
}

export const createComponent = (data) => {
    return {
        type: CREATE_COMPONENT,
        data,
    }
}

export const clearOptions = () => {
    return {
        type: CLEAR_OPTION
    }
}

export const deleteComponent = (id) => {
    return {
        type: DELETE_COMPONENT,
        id,
    }
}