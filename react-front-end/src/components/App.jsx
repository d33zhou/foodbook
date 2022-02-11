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

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        className='App'
        sx={{
          backgroundColor: '#f0f2f5',
          height: '100vh',
        }}>
        <Container maxWidth='lg'>
          <ContainerLogin />
        </Container>
      </Box>
    </>
  );
}

export default App;
