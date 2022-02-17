import { Typography, Stack, Avatar, IconButton } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';

const UserDetails = (props) => {
  const { avatar, first_name, last_name, email, following } = props;
  
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

    <IconButton>
      {following && <AddReactionIcon fontSize="large" />}
      {!following && <AddReactionOutlinedIcon fontSize="large" />}
    </IconButton>

    </Stack>
  );
};

export default UserDetails;