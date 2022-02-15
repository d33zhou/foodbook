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
import RecipeItem from './RecipeItem';

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
            <Route path='/feed'>
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
            </Route>
            <Route path='/create'>
              {/* Recipe Form */}
              <Container maxWidth='sm'>
                <h2>Recipe Form Component</h2>
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

                  <RecipeForm />
                </Box>
              </Container>
            </Route>
            <Route path='/recipe/:id'>
              {/* Recipe Item */}
              <Container maxWidth='md'>
                <h2>Recipe Item Component</h2>
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
                  <RecipeItem />
                </Box>
              </Container>
            </Route>

            <Route path='/profile'>
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
            </Route>
        
            <Route path='/404' render={() => <h2>404 - Not Found</h2>} />
            <Redirect to='/404' />
          </Switch>
        </Box>
      </Router>
    </AuthProvider>
  );
}

export default App;
