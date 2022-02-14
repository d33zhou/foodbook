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
import RecipeForm from './RecipeForm';
import User from './User';
import RecipeItem from './RecipeItem';

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
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            columnGap: '4rem',
            margin: '0 auto',
          }}>
          <Navigation />
          <Box>
            <RecipeList />
          </Box>

          <RecipeFilters />
        </Box>
        {/* Recipe Form */}
        <Container maxWidth='sm'>
          <h2>Recipe Form Component</h2>
          <RecipeForm />
        </Container>

        {/* User Profile */}
        <Container>
          <h1>User Profile</h1>
          <User />
        </Container>

        {/* Recipe Item */}
        <Container maxWidth='md'>
          <h2>Recipe Item Component</h2>
          <RecipeItem />
        </Container>
      </Box>
    </>
  );
}

export default App;
