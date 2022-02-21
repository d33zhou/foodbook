import { Box, Button,Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    // <Drawer
    //     sx={{
    //       width: 240,
    //       flexShrink: 0,
    //       '& .MuiDrawer-paper': {
    //         width: 240,
    //         boxSizing: 'border-box',
    //       },
    //     }}
    //     variant="permanent"
    //     anchor="left"
    //   >
    <Box
      sx={{
        // marginRight: '4rem',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        flexDirection: 'column',
        position:'fixed'     
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
    // </Drawer>
  );
};

export default Navigation;
