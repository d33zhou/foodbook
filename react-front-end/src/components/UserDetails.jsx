import { Typography, Stack, Avatar, IconButton } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

const UserDetails = (props) => {
  const { avatar, first_name, last_name, email, following, setFollowing } = props;
  
  const handleFollow = () => {
    console.log("Followed!");

    setFollowing(true);
  };

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