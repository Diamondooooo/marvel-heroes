import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Link
          onClick={() => navigate('/')}
          variant='h6'
          component='span'
          style={{ textDecoration: 'none', cursor: 'pointer', color: 'white', flexGrow: 1 }}
        >
          Marvel
        </Link>
        <IconButton color='inherit'>
          <BookmarkIcon onClick={() => navigate('/favorite')} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
