import { Box, Typography, Container } from '@mui/material';
import UserFollowList from './UserFollowList';
import UserRecipeList from './UserRecipeList';
import UserBookmarkList from './UserBookmarkList';

import { useContext } from 'react';
import { authContext } from '../providers/AuthContext';

const userAPI = [
  {
    id: 1,
    first_name: 'Test',
    last_name: 'User',
    email: 'testuser@test.com',
    password: '123456',
    avatar: 'https://robohash.org/isterepellendusbeatae.png?size=50x50&set=set1'
  }
];




const User = (props) => {
  const { auth, user } = useContext(authContext);
  
  console.log("User Details: ", user); // remove after debugging
  // user --> id, first/last name, avatar

  return (
    <Container>
      <UserFollowList id={user.id} />
      <hr/>
      <UserRecipeList />
      <hr/>
      <UserBookmarkList />
    </Container>
  );
};

export default User;


// user can see:
//    people they follow --> dbHelper getFollowsByUser
//    recipes they've posted --> dbHelper getRecipeByUser
//    recipes they've bookmarked --> dbHelper getBookmarksByUser
