import { TextField } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/useDebounced';
import { allHeroes } from '../../Redux/actions/heroesActions';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const searchValueD = useDebounce(searchValue);

  useEffect(() => {
    dispatch(allHeroes(searchValueD));
  }, [searchValueD]);

  const onChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <TextField
      label='search'
      variant='standard'
      fullWidth
      type='search'
      sx={{
        mb: '1,5rem',
      }}
      onChange={onChange}
    />
  );
}

export default Search;
