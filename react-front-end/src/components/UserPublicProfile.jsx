import { Box } from '@mui/material';
import UserFollowerList from './UserFollowerList';
import UserRecipeList from './UserRecipeList';
import UserDetails from './UserDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../providers/AuthContext';

const UserPublicProfile = (props) => {
  const { id } = useParams(); // id of user being viewed (not logged in user)
  const [otherUser, setOtherUser] = useState({});
  const [following, setFollowing] = useState(false);

  const [loadingDetails, setLoadingDetails] = useState(false);
  const [loadingRecipes, setLoadingRecipes] = useState(false);
  const [loadingFollowers, setLoadingFollowers] = useState(false);

  const { user } = useAuth(); // logged in user state

  // set user state for profile being viewed
  useEffect(() => {
    setLoadingDetails(true);
    setLoadingRecipes(true);
    setLoadingFollowers(true);

    axios.get(`http://localhost:3001/api/users/${id}`).then((res) => {
      setOtherUser(res.data);
    });
  }, [id]);

  // set follow status for profile being viewed
  useEffect(() => {
    if (user) {
      const friendPairing = {
        auth_user: user.id,
        target_user: id,
      };

      axios
        .get(`http://localhost:3001/api/friends/status`, {
          params: friendPairing,
        })
        .then((res) => {
          res.data > 0 ? setFollowing(true) : setFollowing(false);
          setTimeout(() => {
            setLoadingDetails(false);
          }, 1000);
        })
        .catch((err) => err.message);
    }
  }, [id, following]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '2rem',
        paddingBottom: '4rem',
        width: '960px',
        paddingLeft:'8rem'
      }}>
      <UserDetails
        {...otherUser}
        following={following}
        setFollowing={setFollowing}
        loading={loadingDetails}
      />

      <UserFollowerList
        id={id}
        following={following}
        loading={loadingFollowers}
        setLoading={setLoadingFollowers}
      />

      <UserRecipeList
        id={id}
        first_name={otherUser.first_name}
        loading={loadingRecipes}
        setLoading={setLoadingRecipes}
      />

    </Box>
  );
};

export default UserPublicProfile;
