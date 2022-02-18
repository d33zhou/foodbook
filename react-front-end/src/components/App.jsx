import axios from 'axios';
import {
  Box,
  Container,
  CssBaseline,
  ScopedCssBaseline,
  Typography,
} from '@mui/material';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import ContainerLogin from './ContainerLogin';
import SearchAppBar from './SearchAppBar';
import Navigation from './Navigation';
import RecipeList from './RecipeList';
import RecipeFilters from './RecipeFilters';
import RecipeForm from './RecipeForm';
import User from './User';
import UserPublicProfile from './UserPublicProfile';
import RecipeItem from './RecipeItem';
import PrivateRoute from './PrivateRoute';

import { AuthProvider,useAuth } from '../providers/AuthContext';
import { useState, useEffect } from 'react';

function App() {
  const [results, setResults] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [cuisine, setCuisine] = useState('');
  

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);

    const difficultyResults = [
      ...fullData.filter((recipe) => {
        return (
          recipe.difficulty === event.target.value &&
          recipe.cuisine === (cuisine || 'thai')
        );
      }),
    ];

    setResults(difficultyResults);
  };

  const handleCuisine = (event) => {
    setCuisine(event.target.value);
    const cuisineResults = [
      ...fullData.filter((recipe) => {
        return (
          recipe.cuisine === event.target.value &&
          recipe.difficulty === (difficulty || 'easy')
        );
      }),
    ];

    setResults(cuisineResults);
  };

  useEffect(() => {
    const testURL = `http://localhost:3001/api/recipes`;
    axios.get(testURL).then((response) => {
      setResults(response.data);
      setFullData(response.data);
    });
    
  }, []);

  return (
    
      <Router>
        <CssBaseline />
        <Box
          className='App'
          sx={{
            backgroundColor: '#f0f2f5',
            height: '100%',
          }}>
          <Switch>
            <PrivateRoute path='/feed'>
              <SearchAppBar />
              <Container maxWidth='lg'>
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
                    <RecipeList results={results} />
                  </Box>
                  <RecipeFilters
                    difficulty={difficulty}
                    cuisine={cuisine}
                    handleDifficulty={handleDifficulty}
                    handleCuisine={handleCuisine}
                  />
                </Box>
              </Container>
            </PrivateRoute>

            <PrivateRoute path='/create'>
              <SearchAppBar />
              <Container maxWidth='lg'>
                <Box
                  maxWidth='lg'
                  mx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    columnGap: '4rem',
                    margin: '0 auto',
                    height: '100vh',
                  }}>
                  <Navigation />
                  <RecipeForm />
                </Box>
              </Container>
            </PrivateRoute>

            <PrivateRoute path='/recipe/:id'>
              <SearchAppBar />
              <Container maxWidth='lg'>
                <Box
                  maxWidth='lg'
                  mx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    columnGap: '4rem',
                    margin: '0 auto',
                    height: '100vh',
                  }}>
                  <Navigation />
                  <RecipeItem />
                </Box>
              </Container>
            </PrivateRoute>

            <PrivateRoute path='/profile'>
              <Container>
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
                    <User />
                  </Box>
                </Box>
              </Container>
            </PrivateRoute>

            <PrivateRoute path='/users/:id'>
              <Container>
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
                    <UserPublicProfile />
                  </Box>
                </Box>
              </Container>
            </PrivateRoute>

            <Route path='/404' render={() => <h2>404 - Not Found</h2>} />

            <Route exact path='/'>
              <Container maxWidth='lg'>
                <ContainerLogin />
              </Container>
            </Route>

            <Redirect to='/404' />
          </Switch>
        </Box>
      </Router>
   
  );
}

export default App;
