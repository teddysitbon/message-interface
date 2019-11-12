import { ADD_MESSAGE } from '../constants/action.js';
import { messages } from '../constants';

const initialState = {
    messages,
    isConnected: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        default:
            return state;
    }
};

export default rootReducer;
