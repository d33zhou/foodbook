import { Stack, Typography, Avatar } from '@mui/material';

const UserFollowListItem = (props) => {
  const { avatar, first_name, last_name } = props;
  
  // render followed user avatar icon and name
  return (
    <Stack direction="column" alignItems="center">
      <Avatar
        alt={`${first_name} ${last_name}`}
        src={avatar}
        />
      <Typography variant='body2'>
        {`${first_name} ${last_name[0]}.`}
      </Typography>
    </Stack>
  );
};

export default UserFollowListItem;