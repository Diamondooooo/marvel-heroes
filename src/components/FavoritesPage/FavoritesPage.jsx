import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_FROM_FAVOURITE } from '../../Redux/types';

const FavoritePage = () => {
  const favorite = useSelector((s) => s.favorite);
  const dispatch = useDispatch();
  const deleteHandler = (id) => dispatch({ type: DELETE_FROM_FAVOURITE, payload: id });
  return (
    <div>
      <h1>favorite heroes</h1>
      {favorite.map((el) => (
        <div>
          <img src={`${el.thumbnail.path}/portrait_xlarge.jpg`} alt='hero img' />
          <button onClick={() => deleteHandler(el.id)} type='button'>
            удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
