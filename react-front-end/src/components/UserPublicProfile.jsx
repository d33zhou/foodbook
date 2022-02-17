import { Container } from '@mui/material';
import UserFollowerList from './UserFollowerList';
import UserRecipeList from './UserRecipeList';
import UserDetails from './UserDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const UserPublicProfile = (props) => {
  const { id } = useParams(); // id of user being viewed (not logged in user)
  const [otherUser, setOtherUser] = useState({});
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}`)
      .then(res => {
        setOtherUser(res.data);
      });
  }, [id]);

  return (
    <Container>
      <hr/>
      <UserDetails {...otherUser} following={following} setFollowing={setFollowing} />
      <hr/>
      <UserFollowerList id={id} setFollowing={setFollowing} />
      <hr/>
      <UserRecipeList id={id} first_name={otherUser.first_name} />
    </Container>
  );
};

export default UserPublicProfile;