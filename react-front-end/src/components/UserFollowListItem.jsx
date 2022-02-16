import { Stack, Typography, Avatar, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';

const UserFollowListItem = (props) => {
  const { id, avatar, first_name, last_name } = props;
  const history = useHistory();

  // render followed user avatar icon and name
  return (
      <Stack direction="column" alignItems="center">
        <IconButton onClick={() => history.push(`/users/${id}`)}>
          <Avatar
            alt={`${first_name} ${last_name}`}
            src={avatar}
            />
        </IconButton>
        <Typography variant='body2'>
          {`${first_name} ${last_name[0]}.`}
        </Typography>
      </Stack>
  );
};

export default UserFollowListItem;