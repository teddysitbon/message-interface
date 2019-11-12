import { ADD_MESSAGE,
    CONNECT_USER } from '../constants/action.js';
import { messages } from '../constants';

const initialState = {
    messages,
    isConnected: false,
    user: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case CONNECT_USER:
            return {
                ...state,
                isConnected: true,
                user: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;
