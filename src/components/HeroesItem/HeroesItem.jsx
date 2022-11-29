import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function HeroesItem({ heroId, img, name }) {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardMedia
          image={`${img}/portrait_xlarge.jpg`}
          component='img'
          alt=''
          title={name}
          sx={{ height: 140 }}
        />
        <CardContent>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
        </CardContent>
        <Button onClick={() => navigate(`/${heroId}`)} variant='text'>
          посмотреть
        </Button>
      </Card>
    </Grid>
  );
}

export default HeroesItem;
