import { Box, Typography, Avatar, IconButton, Button } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import axios from 'axios';
import { useAuth } from '../providers/AuthContext';

const UserDetails = (props) => {
  const {
    id,
    avatar,
    first_name,
    last_name,
    email,
    following,
    setFollowing,
    self,
  } = props; // represents either the logged in user or user profile being viewed, depending on if called from User component or UserPublicProfile compoennt, respectively
  const { user } = useAuth(); // logged in user state

  // follow the currently viewed user (only from UserPublicProfile)
  const handleFollow = () => {
    const addFollowURL = 'http://localhost:3001/api/friends/follow';
    const friendPairing = {
      user_id_1: user.id, // the user to follow another user
      user_id_2: id, // the user that will be followed
    };

    axios
      .post(addFollowURL, friendPairing)
      .then(() => setFollowing(true))
      .catch((err) => err.message);
  };

  // unfollow the currently viewed user (only from UserPublicProfile)
  const handleUnfollow = () => {
    const removeFollowURL = 'http://localhost:3001/api/friends/unfollow';
    const friendPairing = {
      user_id_1: user.id, // the user to follow another user
      user_id_2: id, // the user that will be followed
    };

    axios
      .delete(removeFollowURL, { data: friendPairing })
      .then(() => setFollowing(false))
      .catch((err) => err.message);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left',
        width: '100%',
        my: 3,
      }}>
        <Avatar
          alt={`${first_name} ${last_name}`}
          src={avatar}
          sx={{ width: 250, height: 250, mb: 2 }}
        />
        
        <Typography variant='h3' color='primary'>
          {`${first_name} ${last_name}`}
        </Typography>

        <Typography variant='h5' color='primary'>
          {email}
        </Typography>
        
      </Box>
      <Box
        sx={{
          m: 3,
          position: 'absolute',
          right: '10%',
        }}
      >
        {!self && following && (
          <Button
            variant='contained'
            endIcon={<AddReactionIcon fontSize='large' />}
            onClick={handleUnfollow}
          >
            Unfollow
          </Button>
        )}

        {!self && !following && (
          <Button
            variant='outlined'
            endIcon={<AddReactionOutlinedIcon fontSize='large' />}
            onClick={handleFollow}
          >
            Follow
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default UserDetails;
