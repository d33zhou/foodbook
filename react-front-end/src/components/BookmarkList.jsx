import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import RecipeListItem from './RecipeListItem';
import { useAuth } from '../providers/AuthContext';

const BookmarkList = (props) => {
  const { fullData } = props; // array of all recipe objects in DB
  const [bookmarks, setBookmarks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user && bookmarks.length <= 0) {
      axios
        .get(`http://localhost:3001/api/users/${user.id}/bookmarks`)
        .then((res) => {
          const bookmarksIdArray = res.data.map((recipe) => recipe.id);
          const bookmarksArray = fullData.filter((recipe) =>
            bookmarksIdArray.includes(recipe.id)
          );
          setBookmarks([...bookmarksArray]);
        })
        .catch((err) => err.message);
    }
  }, [user, bookmarks]);

  const parsedRecipes =
    bookmarks.length > 0 &&
    bookmarks.map((recipe) => {
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

export default BookmarkList;
