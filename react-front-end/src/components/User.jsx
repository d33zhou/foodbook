import { Box } from '@mui/material';
import UserFollowList from './UserFollowList';
import UserFollowerList from './UserFollowerList';
import UserRecipeList from './UserRecipeList';
import UserBookmarkList from './UserBookmarkList';
import UserDetails from './UserDetails';

import { useAuth } from '../providers/AuthContext';

const User = (props) => {
  const { user } = useAuth();

  return (
    user && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '2rem',
          paddingBottom: '4rem',
          paddingLeft:'8rem'
        }}>
        <UserDetails {...user} self={true} />

        <UserFollowList id={user.id} />

        <UserFollowerList id={user.id} />

        <UserRecipeList id={user.id} />

        <UserBookmarkList id={user.id} />
      </Box>
    )
  );
};

export default User;
