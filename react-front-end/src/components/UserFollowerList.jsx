import { Typography, Stack, Container } from '@mui/material';
import UserFollowListItem from './UserFollowListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserFollowerList = (props) => {
  const { id, setFollowing } = props;
  const [results, setResults] = useState([]);

  // array of users that follow the logged in user
  let allFollowers = results.length > 0 && results.map(follower => {
    return (
      <UserFollowListItem
        key={follower.id}
        {...follower}
        
      />
    );
  });

//setFollowing={setFollowing}

  // get the array of following user objects (incl. name, avatar)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}/followers`)
      .then(res => {
        setResults([...res.data]);
      });

      // allFollowers = results.length > 0 && results.map(follower => {
      //   return (
      //     <UserFollowListItem
      //       key={follower.id}
      //       {...follower}
      //       setFollowing={setFollowing}
      //     />
      //   );
      // });
  }, [id]);

  // display block for the user icons for all followers of the logged in user
  return (
    <Stack direction="row" spacing={4}>
      <Typography variant='h4' color='primary'>
        Followers ({results.length}):
      </Typography>
      <Container sx={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)'}}>
        {allFollowers}
      </Container>
    </Stack>
  );
};

export default UserFollowerList;