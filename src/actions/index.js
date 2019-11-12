import { ADD_MESSAGE,
    CONNECT_USER } from '../constants/action.js';

export const addMessage = (message) => (
    {
        type: ADD_MESSAGE,
        payload: message
    }
);
export const connectUser = (user) => (
    {
        type: CONNECT_USER,
        payload: user
    }
);
