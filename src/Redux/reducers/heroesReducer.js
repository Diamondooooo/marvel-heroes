import {GET_HEROES} from '../types';

const heroesReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_HEROES:
            return [...payload.data.data.results];
        default:
            return state;
    }
};

export default heroesReducer;
