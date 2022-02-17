import { Typography, Stack, Avatar, IconButton } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import axios from "axios";

import { useAuth } from '../providers/AuthContext';

const UserDetails = (props) => {
  const { id, avatar, first_name, last_name, email, following, setFollowing } = props; // represents either the logged in user or user profile being viewed, depending on if called from User component or UserPublicProfile compoennt, respectively
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
      .then(res => {
        console.log("resolved axios request: ", res.data);
        setFollowing(true);
      })
      .catch(err => err.message);
  };

  // unfollow the currently viewed user (only from UserPublicProfile)
  const handleUnfollow = () => {
    console.log("Unfollowed!");

    setFollowing(false);
  }

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      
      <Stack direction="row" alignItems="center">
        <Avatar
          alt={`${first_name} ${last_name}`}
          src={avatar}
          sx={{ width: 100, height: 100 }}
        />
        <Stack direction="column" alignItems="flex-start" justifyContent="center">
          <Typography variant='h3' color='primary'>
            {`${first_name} ${last_name}`}
          </Typography>
          <Typography variant='h5' color='primary'>
            {email}
          </Typography>
        </Stack>
      </Stack>

      {following && 
        <IconButton onClick={handleUnfollow}>
          <AddReactionIcon fontSize="large" />
        </IconButton>
      }
      
      {!following && 
        <IconButton onClick={handleFollow}>
          <AddReactionOutlinedIcon fontSize="large" />
        </IconButton>
      }

    </Stack>
  );
};

export default UserDetails;