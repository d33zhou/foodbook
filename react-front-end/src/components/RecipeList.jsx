import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button } from '@mui/material';
import RecipeListItem from './RecipeListItem';

const RecipeList = () => {
  const [results, setResults] = useState([]);
  
  // console.log(results[0]);

  const parsedRecipes =
    Array.isArray(results) &&
    results.map((recipe) => {
      return (
        <RecipeListItem
          key={recipe.id}
          title={recipe.title}
          instructions={recipe.instructions}
          image_link={recipe.image_link}
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
