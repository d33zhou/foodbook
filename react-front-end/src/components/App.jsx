import axios from 'axios';
import {
  Box,
  Container,
  CssBaseline,
  ScopedCssBaseline,
  Typography,
} from '@mui/material';
import './App.css';

import ContainerLogin from './ContainerLogin';
import SearchAppBar from './SearchAppBar';
import Navigation from './Navigation';
import RecipeList from './RecipeList';
import RecipeFilters from './RecipeFilters';

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        className='App'
        sx={{
          backgroundColor: '#f0f2f5',
          height: '100%',
        }}>
        <Container maxWidth='lg'>
          <ContainerLogin />
        </Container>
        <SearchAppBar />
        <Box
          maxWidth='lg'
          mx={{
            display: 'flex',
            margin: '0 auto',
          }}>
          <Navigation />
          <Box>
            <RecipeList />
          </Box>

          <RecipeFilters />
        </Box>
      </Box>
    </>
  );
}

export default App;
