import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import RecipeListItem from './RecipeListItem';

const RecipeList = () => {
  const [results, setResults] = useState([]);

  console.log(results[0]);

  const parsedRecipes =
    results.length > 0 &&
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

  useEffect(() => {
    const testURL = `http://localhost:3001/api/recipes/`;
    axios.get(testURL).then((response) => {
      setResults([...response.data]);
      // console.log(response.data);
    });
  }, []);

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
