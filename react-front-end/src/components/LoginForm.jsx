import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const LoginForm = () => {
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
      autoComplete='off'>
      <TextField
        id='standard-basic'
        label='Email'
        variant='standard'
        type='email'
      />
      <TextField
        id='standard-password-input'
        label='Password'
        type='password'
        autoComplete='current-password'
        variant='standard'
      />

      <Stack direction='column' spacing={2}>
        <Button variant='contained'>Sign In</Button>
        <Button variant='contained'>Create New Account</Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
