import { Box, Typography } from '@mui/material';
import LoginForm from './LoginForm';

const ContainerLogin = () => {
  return (
    <>
      <Box
        sx={{
          width: 'auto',
          height: 'auto',
          padding: '40px',
          display: 'flex',
        }}>
        <Box
          sx={{
            paddingLeft: '40px',
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
          }}>
          <Typography
            variant='h2'
            component='h1'
            color='primary'
            fontWeight='bold'
            gutterBottom>
            Foodbook
          </Typography>
          <Typography variant='h6' gutterBottom>
            Welcome to Foodbook, a social network to share your favourite
            recipes with family and friends.
          </Typography>
        </Box>
        <LoginForm />
      </Box>
    </>
  );
};

export default ContainerLogin;
