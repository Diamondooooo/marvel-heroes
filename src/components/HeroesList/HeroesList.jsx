import {Grid} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {allHeroes} from '../../Redux/actions/heroesActions';
import HeroesItem from '../HeroesItem/HeroesItem';

function HeroesList() {
    const heroes = useSelector((state) => state.heroes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHeroes());
    }, []);
console.log(heroes)
    return (
        <Grid container spacing={2}>
            {heroes.map((el) => (
                <HeroesItem key={el.id} heroId={el.id} img={el.thumbnail?.path || ''} name={el.name || ''}/>
            ))}
        </Grid>
    );
}

export default HeroesList;
