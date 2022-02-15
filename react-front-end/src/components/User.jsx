import { Box, Typography, Container } from '@mui/material';
import UserFollowList from './UserFollowList';
import UserRecipeList from './UserRecipeList';
import UserBookmarkList from './UserBookmarkList';
import UserDetails from './UserDetails';

import { useContext } from 'react';
import { authContext } from '../providers/AuthContext';

const User = (props) => {
  const { auth, user } = useContext(authContext);

  return (
    <Container>
      <hr/>
      <UserDetails {...user} />
      <hr/>
      <UserFollowList id={user.id} />
      <hr/>
      <UserRecipeList id={user.id} />
      <hr/>
      <UserBookmarkList id={user.id} />
    </Container>
  );
};

export default User;