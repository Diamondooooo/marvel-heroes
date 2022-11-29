import {ADD_TO_FAVOURITE, DELETE_FROM_FAVOURITE} from '../types';
import {LOCAL_STORAGE_HEROES} from "../../constants/local-storage";

const favoriteReducer = (state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_HEROES)) || [], action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE: 
            localStorage.setItem(LOCAL_STORAGE_HEROES, JSON.stringify([...state, action.payload]))
            return [...state, action.payload];
        case DELETE_FROM_FAVOURITE:
            return state.filter(el => el.id !== action.payload)

        default:
            return state;
    }
};

export default favoriteReducer;
