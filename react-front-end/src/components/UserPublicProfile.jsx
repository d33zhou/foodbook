import { Container } from '@mui/material';
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
  const { user } = useAuth(); // logged in user state

  // set user state for profile being viewed
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}`)
      .then(res => {
        setOtherUser(res.data);
      });
  }, [id]);

  // set follow status for profile being viewed
  useEffect(() => {
    if (user) {
      const friendPairing = {
        auth_user: user.id,
        target_user: id
      };
  
      console.log(`request for following with: ${friendPairing.auth_user} and ${friendPairing.target_user}`)
      console.log(`following status is ${following}`)
      
      axios
        .get(`http://localhost:3001/api/friends/status`, { params: friendPairing })
        .then(res => {
          console.log("axios follow GET returns: ", res.data);
          res.data > 0 ? setFollowing(true) : setFollowing(false);
        })
        .catch(err => console.log(err.message));
    }
  }, [id, following]);

  return (
    <Container>
      <hr/>
      <UserDetails {...otherUser} following={following} setFollowing={setFollowing} />
      <hr/>
      <UserFollowerList id={id} following={following} />
      <hr/>
      <UserRecipeList id={id} first_name={otherUser.first_name} />
    </Container>
  );
};

export default UserPublicProfile;