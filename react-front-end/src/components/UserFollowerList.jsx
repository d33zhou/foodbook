import { Box, Skeleton, Stack, Typography } from '@mui/material';
import UserFollowListItem from './UserFollowListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UserFollowerList = (props) => {
  const { id, following, loading, setLoading } = props;
  const [results, setResults] = useState([]);

  // array of users that follow the logged in user
  const allFollowers =
    results.length > 0 &&
    results.map((follower) => {
      return <UserFollowListItem key={follower.id} {...follower} />;
    });

  const allSkeletons = Array(12).fill(null).map((element, index) => {
    return <Skeleton key={index} variant='circular' width={56} height={56} />;
  });

  // get the array of following user objects (incl. name, avatar)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${id}/followers`).then((res) => {
      setResults([...res.data]);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  }, [id, following]);

  // display block for the user icons for all followers of the logged in user
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
        Followers ({results.length}):
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
            {allFollowers.length > 0 ? allFollowers :
              <Typography sx={{ gridColumn: 'span 12' }} variant='h6' color='secondary'>
                No followers found. Anyone looking for a sous-chef? :)
              </Typography>
            }
          </>
        )}

      </Box>
    </Box>
  );
};

export default UserFollowerList;
