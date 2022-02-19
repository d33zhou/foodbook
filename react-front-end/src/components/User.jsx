import { Container } from '@mui/material';
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
      <Container>
        <UserDetails {...user} self={true} />
        <hr />
        <UserFollowList id={user.id} />
        <hr />
        <UserFollowerList id={user.id} />
        <hr />
        <UserRecipeList id={user.id} />
        <hr />
        <UserBookmarkList id={user.id} />
      </Container>
    )
  );
};

export default User;
