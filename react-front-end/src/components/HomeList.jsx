import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import RecipeListItem from "./RecipeListItem";
import { useAuth } from "../providers/AuthContext";

const HomeList = (props) => {
  const { results } = props; // array of all recipe objects in DB
  const [home, setHome] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3001/api/users/${user.id}/follows`)
        .then((res) => {
          const followsIdArray = res.data.map((follow) => follow.id);
          const homeArray = results.filter((recipe) =>
            followsIdArray.includes(recipe.creator_id)
          );
          setHome([...homeArray]);
        })
        .catch((err) => err.message);
    }
  }, [user, home, results]);

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
        />
      );
    });

  return (
    <Box
      sx={{
        flexGrow: 3,
      }}
    >
      <Box>
        {(home.length <= 0 && results.length > 0) && (
          <Typography
            variant="h3"
            component="h1"
            color="primary"
            fontWeight="bold"
            gutterBottom
            width="700px"
          >
            Sorry! There are no results. Please try another filter.
          </Typography>
        )}
        {parsedRecipes}
      </Box>
    </Box>
  );
};

export default HomeList;
