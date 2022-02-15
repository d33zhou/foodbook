import { Container } from '@mui/material';
import UserFollowerList from './UserFollowerList';
import UserRecipeList from './UserRecipeList';
import UserDetails from './UserDetails';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserPublicProfile = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}`)
      .then(res => {
        setUser(res.data);
      });
  }, [id]);

  return (
    <Container>
      <hr/>
      <UserDetails {...user} />
      <hr/>
      <UserFollowerList id={id} />
      <hr/>
      <UserRecipeList id={id} first_name={user.first_name} />
    </Container>
  );
};

export default UserPublicProfile;