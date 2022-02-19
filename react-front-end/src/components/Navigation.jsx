import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = ({onClick}) => {
  return (
    <Box
      sx={{
        // marginRight: '4rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        flexDirection: 'column',
        minWidth: 'content',
      }}>
      <Button variant='text' size='large' component={Link} to="/feed">
        Home
      </Button>
      <Button variant='text' size='large' component={Link} to="/explore" >
        Explore
      </Button>
      <Button variant='text' size='large' component={Link} to='/bookmarks'>
        Bookmarks
      </Button>
      <Button variant='text' size='large' component={Link} to="/profile">
        Profile
      </Button>
    </Box>
  );
};

export default Navigation;
