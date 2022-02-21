import { Box, Typography, Skeleton } from '@mui/material';
import UserFollowListItem from './UserFollowListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserFollowList = (props) => {
  const { id, loading, setLoading } = props;
  const [results, setResults] = useState([]);

  // array of users that the logged in user follows
  const allFollows =
    results.length > 0 &&
    results.map((follow) => {
      return <UserFollowListItem key={follow.id} {...follow} />;
    });

  const allSkeletons = Array(12).fill(null).map((element, index) => {
    return <Skeleton key={index} variant='circular' width={56} height={56} />;
  });

  // get the array of followed user objects (incl. name, avatar)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${id}/follows`).then((res) => {
      setResults([...res.data]);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  // display block for the user icons for all follows by logged in user
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        p: 2,
      }}>
      <Typography variant='h5' color='primary' gutterBottom>
        Following ({results.length}):
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 1,
        }}
      >

        {loading ? (
          <>
            {allSkeletons}
          </>
        ) : (
          <>
            {allFollows.length > 0 ? allFollows :
              <Typography sx={{ gridColumn: 'span 12' }} variant='h6' color='secondary'>
                You are not following anyone. Follow a user to keep up-to-date!
              </Typography>
            }
          </>
        )}

      </Box>
    </Box>
  );
};

export default UserFollowList;
