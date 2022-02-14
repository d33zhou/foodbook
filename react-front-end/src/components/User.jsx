import { Box, Typography, Container } from '@mui/material';
import UserFollowList from './UserFollowList';
import UserRecipeList from './UserRecipeList';
import UserBookmarkList from './UserBookmarkList';

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
  return (
    <Container>
      <UserFollowList />
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
