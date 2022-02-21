import { Box } from '@mui/material';
import UserFollowList from './UserFollowList';
import UserFollowerList from './UserFollowerList';
import UserRecipeList from './UserRecipeList';
import UserBookmarkList from './UserBookmarkList';
import UserDetails from './UserDetails';

import { useAuth } from '../providers/AuthContext';
import { useState, useEffect } from 'react';

const User = (props) => {
  const { user } = useAuth();

  const [loadingDetails, setLoadingDetails] = useState(false);
  const [loadingRecipes, setLoadingRecipes] = useState(false);
  const [loadingBookmarks, setLoadingBookmarks] = useState(false);
  const [loadingFollowers, setLoadingFollowers] = useState(false);
  const [loadingFollows, setLoadingFollows] = useState(false);

  useEffect(() => {
    setLoadingDetails(true);
    setLoadingRecipes(true);
    setLoadingBookmarks(true);
    setLoadingFollowers(true);
    setLoadingFollows(true);

    setTimeout(() => {
      setLoadingDetails(false);
    }, 1000);
  }, []);

  return (
    user && (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '2rem',
          paddingBottom: '4rem',
          width: '960px',
        }}>
        <UserDetails {...user} self={true} loading={loadingDetails} />

        <UserFollowList id={user.id} loading={loadingFollows} setLoading={setLoadingFollows} />

        <UserFollowerList id={user.id} loading={loadingFollowers} setLoading={setLoadingFollowers} />

        <UserRecipeList id={user.id} loading={loadingRecipes} setLoading={setLoadingRecipes} />

        <UserBookmarkList id={user.id} loading={loadingBookmarks} setLoading={setLoadingBookmarks} />
      </Box>
    )
  );
};

export default User;
