import {configureStore} from '@reduxjs/toolkit';
import heroesReducer from './reducers/heroesReducer';
import favoriteReducer from "./reducers/favouriteReducer";

const store = configureStore({
    reducer: {
        heroes: heroesReducer,
        favorite: favoriteReducer
    },
});

export default store;
