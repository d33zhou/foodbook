import { Box, Button } from '@mui/material';

const Navigation = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginRight: '4rem',
        textAlign: 'left',
      }}>
      <Button variant='text' size='large'>
        Home
      </Button>
      <Button variant='text' size='large'>
        Explore
      </Button>
      <Button variant='text' size='large'>
        Bookmarks
      </Button>
      <Button variant='text' size='large'>
        Profile
      </Button>
    </Box>
  );
};

export default Navigation;
