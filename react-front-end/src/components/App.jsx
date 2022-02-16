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

import { AuthProvider } from '../providers/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <Box
          className='App'
          sx={{
            backgroundColor: '#f0f2f5',
            height: '100%',
          }}>
          <Switch>
            <Route exact path='/'>
              <Container maxWidth='lg'>
                <ContainerLogin />
              </Container>
            </Route>

            <PrivateRoute path='/feed'>
              <SearchAppBar />
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
                    <RecipeList />
                  </Box>
                  <RecipeFilters />
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
            <Redirect to='/404' />
          </Switch>
        </Box>
      </Router>
    </AuthProvider>
  );
}

export default App;
