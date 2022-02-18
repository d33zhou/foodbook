import { Stack, Typography, Avatar, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../providers/AuthContext';
import { useEffect } from 'react';

const UserFollowListItem = (props) => {
  const { id, avatar, first_name, last_name, setFollowing } = props;
  const history = useHistory();
  const { user } = useAuth();

  // useEffect(() => {
  //   if (setFollowing && user.id !== id) {
  //     setFollowing(true);
  //   }
  // }, [id]);

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