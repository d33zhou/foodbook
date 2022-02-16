import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = ({onClick}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        marginRight: '4rem',
        textAlign: 'left',
      }}>
      <Button variant='text' size='large' component={Link} to="/feed" value='home'>
        Home
      </Button>
      <Button variant='text' size='large' value='explore' onClick={onClick} >
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
