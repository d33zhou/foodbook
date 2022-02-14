import { Box, Typography, Avatar } from '@mui/material';

const UserFollowListItem = (props) => {
  const { avatar, first_name, last_name } = props;
  
  return (
    <Avatar
      alt={`${first_name} ${last_name}`}
      src={avatar}
    />
  );
};

export default UserFollowListItem;