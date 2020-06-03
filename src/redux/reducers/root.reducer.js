import { ADD_OPTION, CREATE_COMPONENT, CLEAR_OPTION, DELETE_COMPONENT } from '../actions/actionTypes';

const initialState = {
    types: [
        'text',
        'password',
        'radio',
        'checkbox',
        'range'
    ],
    currentOptions: [],
    createdComponent: [],
};

const deleteComponent = (arr, id) => {
    let newArr = [...arr];
    newArr.splice(id, 1);
    return newArr
}
    

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_OPTION: {
            return {
                ...state,
                currentOptions: [...state.currentOptions, action.value]
            };
        }
        case CLEAR_OPTION: {
            return {
                ...state,
                currentOptions: []
            };
        }
        case CREATE_COMPONENT: {
            return {
                ...state,
                createdComponent: [...state.createdComponent, action.data]
            };
        }
        case DELETE_COMPONENT: {
            return {
                ...state,
              createdComponent: deleteComponent(state.createdComponent, action.id),
            }
        }
        default :
            return state
    }
}

export default rootReducer;