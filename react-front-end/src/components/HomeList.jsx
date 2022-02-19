import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import RecipeListItem from './RecipeListItem';
import { useAuth } from '../providers/AuthContext';

const HomeList = (props) => {
  const { fullData } = props; // array of all recipe objects in DB
  const [home, setHome] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user && home.length <= 0) {
      axios
        .get(`http://localhost:3001/api/users/${user.id}/follows`)
        .then((res) => {
          const followsIdArray = res.data.map((follow) => follow.id);
          const homeArray = fullData.filter((recipe) =>
            followsIdArray.includes(recipe.creator_id)
          );
          setHome([...homeArray]);
        })
        .catch((err) => err.message);
    }
  }, [user, home]);

  const parsedRecipes =
    home.length > 0 &&
    home.map((recipe) => {
      return (
        <RecipeListItem
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          image_link={recipe.image_link}
          id={recipe.id}
          cuisine={recipe.cuisine}
          restrictions={recipe.dietary_restriction}
          prepTime={recipe.prep_minutes}
          difficulty={recipe.difficulty}
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

export default HomeList;
