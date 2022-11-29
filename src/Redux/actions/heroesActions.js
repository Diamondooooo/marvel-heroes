import axios from 'axios';
import { ADD_TO_FAVOURITE, DELETE_FROM_FAVOURITE, GET_HEROES } from '../types';

const queryParams = {
  ts: '1',
  apikey: '3ca45c371a90bf6c4ff8ae62a9f0d8cc',
  hash: '33a1575860b0fe0896dc1d6364592b2c',
};

export const setHeroesAC = (heroes) => ({ type: GET_HEROES, payload: heroes });

export const allHeroes = (heroName) => (dispatch) => {
  if (!heroName) {
    axios('http://gateway.marvel.com/v1/public/characters', { params: queryParams }).then((res) =>
      dispatch({ type: GET_HEROES, payload: res }),
    );
  } else {
    axios('http://gateway.marvel.com/v1/public/characters', {
      params: { ...queryParams, name: heroName },
    }).then((res) => dispatch({ type: GET_HEROES, payload: res }));
  }
};

export const addToFavoriteAction = (hero) => {
  return { type: ADD_TO_FAVOURITE, payload: hero };
};

export const deleteFromFavoriteAction = (heroId) => {
  return { type: DELETE_FROM_FAVOURITE, payload: heroId };
};
