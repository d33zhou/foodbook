import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import RecipeListItem from './RecipeListItem';
import { useAuth } from '../providers/AuthContext';
import loadingGif from '../loading.gif';

const BookmarkList = (props) => {
  const { results } = props; // array of all recipe objects in DB
  const [bookmarks, setBookmarks] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (user) {
      axios
        .get(`http://localhost:3001/api/users/${user.id}/bookmarks`)
        .then((res) => {
          const bookmarksIdArray = res.data.map((recipe) => recipe.id);
          const bookmarksArray = results.filter((recipe) =>
            bookmarksIdArray.includes(recipe.id)
          );
          setBookmarks([...bookmarksArray]);
          setLoading(false);
        })
        .catch((err) => err.message);
    }
  }, [user, results]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          marginLeft: '10rem',
        }}>
        <img src={loadingGif} alt='Loading recipe GIF' />
      </Box>
    );
  }

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
          first_name={recipe.first_name}
          last_name={recipe.last_name}
          avatar={recipe.avatar}
          creator_id={recipe.creator_id}
        />
      );
    });

  return (
    <Box
      sx={{
        flexGrow: 3,
        paddingLeft: '10rem',
        width: '940px',
      }}>
      <Box>
        {bookmarks.length <= 0 && results.length > 0 && (
          <Typography
            variant='h3'
            component='h1'
            color='primary'
            fontWeight='bold'
            gutterBottom
            width='700px'>
            Sorry! There are no results. Please try another filter.
          </Typography>
        )}
        {parsedRecipes}
      </Box>
    </Box>
  );
};

export default BookmarkList;
