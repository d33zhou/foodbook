import { Typography, Stack, Container } from '@mui/material';
import UserFollowListItem from './UserFollowListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserFollowList = (props) => {
  const { id } = props;
  const [results, setResults] = useState([]);
  
  // array of users that the logged in user follows
  const allFollows = results.length > 0 && results.map(follow => {
    return (
      <UserFollowListItem
        key={follow.id}
        {...follow}
      />
    );
  });

  // get the array of followed user objects (incl. name, avatar)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}/follows`)
      .then(res => {
        setResults([...res.data]);
      });
  }, []);

  // display block for the user icons for all follows by logged in user
  return (
    <Stack direction="row" spacing={4}>
      <Typography variant='h4' color='primary'>
        Following: 
      </Typography>
      <Container sx={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)'}}>
        {allFollows}
      </Container>
    </Stack>
  );
};

export default UserFollowList;