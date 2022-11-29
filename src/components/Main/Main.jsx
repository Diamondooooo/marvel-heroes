import {Container} from '@material-ui/core';
import React from 'react';
import HeroesList from '../HeroesList/HeroesList';
import Search from '../Search/Search';

function Main() {
    return (
        <>
            <Container
                sx={{
                    mt: '4rem',
                }}
            >
                <Search/>
                <HeroesList/>
            </Container>
        </>
    );
}

export default Main;
