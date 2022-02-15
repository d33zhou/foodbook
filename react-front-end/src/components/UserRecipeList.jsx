import { ImageList, Stack, Typography } from '@mui/material';
import UserRecipeListItem from './UserRecipeListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserRecipeList = (props) => {
  const { id } = props;
  const [results, setResults] = useState([]);
  
  // array of recipes that the logged in user created
  const allRecipes = results.length > 0 && results.map(recipe => {
    return (
      <UserRecipeListItem
        key={recipe.id}
        {...recipe}
      />
    );
  });

  // get the array of recipes created by the user (basic details only)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}/recipes`)
      .then(res => {
        setResults([...res.data]);
      });
  }, []);

  // display image grid for all recipes created by the user
  return (
    <Stack>
      <Typography variant='h4' color='primary'>
        Your Recipes
      </Typography>
      <ImageList sx={{height: 672}} cols={5} rowHeight={164}>
        {allRecipes}
      </ImageList>
    </Stack>
  );
};

export default UserRecipeList;