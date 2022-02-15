import { Box, Typography, Container, Stack } from '@mui/material';
import UserFollowListItem from './UserFollowListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

// will have user ID to run db query with
const followAPI = [
  {
    follow_date: '12/23/2021',
    user_id_1: 1,
    user_id_2: 2
  },
  {
    follow_date: '12/25/2021',
    user_id_1: 1,
    user_id_2: 3
  },
  {
    follow_date: '12/24/2021',
    user_id_1: 1,
    user_id_2: 4
  }
];

const followsAPI = [
  {
    id: 2,
    first_name: 'Test1',
    last_name: 'User1',
    avatar: 'https://robohash.org/isterepellendusbeatae.png?size=50x50&set=set1'
  },
  {
    id: 3,
    first_name: 'Test2',
    last_name: 'User2',
    avatar: 'https://robohash.org/expeditadebitisaut.png?size=50x50&set=set1'
  },
  {
    id: 4,
    first_name: 'Test3',
    last_name: 'User3',
    avatar: 'https://robohash.org/maximeautqui.png?size=50x50&set=set1'
  },
  {
    id: 5,
    first_name: 'Test4',
    last_name: 'User4',
    avatar: 'https://robohash.org/voluptatemrerumcorrupti.png?size=50x50&set=set1'
  },
  {
    id: 6,
    first_name: 'Test5',
    last_name: 'User5',
    avatar: 'https://robohash.org/veniamquisdicta.png?size=50x50&set=set1'
  },
];


const UserFollowList = (props) => {
  const { id } = props;
  const [results, setResults] = useState([]);
  
  const allFollows = results.length > 0 && results.map(follow => {
    return (
      <UserFollowListItem
        key={follow.id}
        {...follow}
      />
    );
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}/follows`)
      .then(res => {
        console.log(res.data); // remove after debugging
        setResults([...res.data]);
      });
  }, []);

  return (
    <Stack direction="row">
      <Typography variant='h4' color='primary'>
        Following: 
      </Typography>
      {allFollows}
    </Stack>
  );
};

export default UserFollowList;

// getFollows -->   select userID from friends
//                  will have array of friend objects
//                  select id+name+avatar from users where id = id of friend