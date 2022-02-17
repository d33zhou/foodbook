import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({results}) => {

  console.log(results);

  const parsedRecipes =
    Array.isArray(results) &&
    results.map((recipe) => {
      return (
        <RecipeListItem
          key={recipe.id}
          title={recipe.title}
          instructions={recipe.instructions}
          image_link={recipe.image_link}
          id={recipe.id}
          cuisine={recipe.cuisine}
          restrictions={recipe.dietary_restriction}
          prepTime={recipe.prep_minutes}
        />
      );
    });


  return (
    <Box
      sx={{
        flexGrow: 3,
      }}>
      {parsedRecipes}
    </Box>
  );
};

export default RecipeList;
