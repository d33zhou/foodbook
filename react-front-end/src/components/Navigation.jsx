import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginRight: '4rem',
        textAlign: 'left',
      }}>
      <Button variant='text' size='large' component={Link} to="/feed">
        Home
      </Button>
      <Button variant='text' size='large' component={Link} to="/feed">
        Explore
      </Button>
      <Button variant='text' size='large' component={Link} to="/feed">
        Bookmarks
      </Button>
      <Button variant='text' size='large' component={Link} to="/profile">
        Profile
      </Button>
    </Box>
  );
};

export default Navigation;
