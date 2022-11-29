import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavoriteAction, deleteFromFavoriteAction } from '../../Redux/actions/heroesActions';
import { Button, CardMedia, Grid, Typography } from '@mui/material';

const apiKey = '3ca45c371a90bf6c4ff8ae62a9f0d8cc&hash=33a1575860b0fe0896dc1d6364592b2c';

function Marvel() {
  const { id } = useParams();
  const [hero, setHero] = useState();
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addToFavoriteAction(hero));
  };
  const removeHandler = () => {
    dispatch(deleteFromFavoriteAction(hero));
  };

  useEffect(() => {
    axios(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${apiKey}`).then(
      (res) => setHero(res.data.data.results[0]),
    );
  }, []);

  if (!hero) return <h3>идет загрузка</h3>;

  return (
    <Grid container spacing={2} sx={{ margin: 'auto' }}>
      <Grid item>
        <CardMedia
          component='img'
          height='140'
          image={`${hero.thumbnail.path}/portrait_xlarge.jpg`}
          alt='green iguana'
        />
      </Grid>
      <Grid spacing={2} justifyContent='space-between'>
        <Typography gutterBottom variant='h5' component='div'>
          {hero.name}
        </Typography>
      </Grid>
      <Grid items xs container direction='row' justifyContent='flex-end' alignItems='flex-end'>
        <Typography variant='body2' color='text.secondary'>
          {hero.description}
        </Typography>
        <Button onClick={addHandler} variant='outlined'>
          добавить в избранное
        </Button>
      </Grid>
    </Grid>
  );
}

export default Marvel;
