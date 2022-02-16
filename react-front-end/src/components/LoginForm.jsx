import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../providers/AuthContext';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const { login } = useAuth();
  
  const handleLogin = e => {
    e.preventDefault();

    setError('');

    if (!email || !password) {
      setError('Blank email and/or password.');
      return;
    }

    login(email, password)
      .then(res => {
        if (!res.id) {
          setError('Invalid email and/or password.');
        } else {
          history.push('/feed')
        }
      })
      .catch(err => err.message);
  };
  
  return (
    <Box
      component='form'
      sx={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#fff',
        width: '40%',
        padding: '20px',
        boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
        '& .MuiTextField-root': {
          mb: '20px',
          width: '100%',
        },
        height: '300px',
      }}
      noValidate
      autoComplete='off'
      >
      <TextField
        id='standard-basic'
        label='Email'
        variant='standard'
        type='email'
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id='standard-password-input'
        label='Password'
        type='password'
        autoComplete='current-password'
        variant='standard'
        onChange={e => setPassword(e.target.value)}
      />

      <Stack direction='column' spacing={2}>
        <Button
          variant='contained'
          onClick={handleLogin}
          >
          Sign In
        </Button>
        <Button
          variant='contained'
          >
          Create New Account
        </Button>
      </Stack>

      {error && <Typography variant='p' color='red'>{error}</Typography>}
    </Box>
  );
};

export default LoginForm;
