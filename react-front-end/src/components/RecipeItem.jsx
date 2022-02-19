import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Chip, Link, Stack, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { blue } from '@mui/material/colors';
import { useParams } from 'react-router-dom';
import { useAuth } from '../providers/AuthContext';

const RecipeItem = () => {
  const [results, setResults] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const {
    title,
    image_link,
    description,
    directions,
    creator_id,
    cuisine,
    dietary_restriction,
    difficulty,
    prep_minutes,
    servings,
    first_name,
    last_name,
    avatar,
  } = results;

  // extract the urlParameter with useParams
  const { id } = useParams();
  const { user } = useAuth();

  const handleBookmark = () => {
    setBookmark(!bookmark);
    if (!bookmark) {
      const bookmarkURL = `http://localhost:3001/api/bookmark`;
      axios
        .post(bookmarkURL, { user_id: user.id, recipe_id: id })
        .then((res) => {});
    } else {
      const unbookmarkURL = `http://localhost:3001/api/unbookmark`;
      axios
        .post(unbookmarkURL, { user_id: user.id, recipe_id: id })
        .then((res) => {});
    }
  };

  useEffect(() => {
    const getBookmarksURL = `http://localhost:3001/api/bookmark`;
    if (user) {
      axios
        .get(getBookmarksURL, { params: { user_id: user.id, recipe_id: id } })
        .then((res) => {
          const response = res.data;

          for (let obj of response.recipeBookmarks) {
            if (obj.recipe_id === Number(id)) {
              setBookmark(true);
              console.log('inside setBookmark');
            }
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [id, user, bookmark]);

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      const likeURL = `http://localhost:3001/api/like`;
      axios
        .post(likeURL, { user_id: user.id, recipe_id: id })
        .then((res) => {});
    } else {
      const unlikeURL = `http://localhost:3001/api/unlike`;
      axios
        .post(unlikeURL, { user_id: user.id, recipe_id: id })
        .then((res) => {});
    }
  };

  useEffect(() => {
    const getLikesURL = `http://localhost:3001/api/like`;
    if (user) {
      axios
        .get(getLikesURL, { params: { user_id: user.id, recipe_id: id } })
        .then((res) => {
          const response = res.data;
          for (let obj of response.recipeLikes) {
            if (obj.recipe_id === Number(id)) {
              setLike(true);
            }
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [id, user, like]);

  useEffect(() => {
    const testURL = `http://localhost:3001/api/recipes/${id}`;
    axios
      .get(testURL)
      .then((response) => {
        setResults({ ...response.data });
      })
      .catch((err) => console.log('Error ', err.message));
  }, [id]);

  useEffect(() => {
    const ingredientsURL = `http://localhost:3001/api/ingredients/${id}`;
    axios
      .get(ingredientsURL)
      .then((response) => {
        setIngredients([...response.data]);
      })
      .catch((err) => console.log('Error ', err.message));
  }, [id]);

  const parsedIngredients = ingredients.map((ingredient) => (
    <li key={ingredient.id}>
      {ingredient.amount} - {ingredient.ingredient_name}
    </li>
  ));

  return (
    <Box
      maxWidth='lg'
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Box
        sx={{
          flexGrow: 3,
          width: '100%',
          overflow: 'hidden',
          textAlign: 'left',
        }}>
        <Typography
          variant='h3'
          component='h1'
          color='primary'
          fontWeight='bold'
          gutterBottom>
          {title}
        </Typography>
        <Box
          component='div'
          sx={{
            display: 'block',
            backgroundImage: `url(${image_link})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            maxWidth: '100%',
            height: '400px',
          }}></Box>
        <Box
          sx={{
            margin: '2rem 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Stack direction='row' spacing={1}>
            <Chip icon={<DinnerDiningOutlinedIcon />} label={`${cuisine}`} />
            <Chip
              icon={<AccessTimeOutlinedIcon />}
              label={`${prep_minutes} minutes`}
            />
            {dietary_restriction && (
              <Chip
                icon={<CheckCircleOutlineOutlinedIcon />}
                label={dietary_restriction}
              />
            )}
          </Stack>
          <Stack direction='row' spacing={1}>
            <Chip
              avatar={<Avatar alt='Natacha' src={avatar} />}
              label={`${first_name} ${last_name}`}
              color='secondary'
            />
          </Stack>
        </Box>
        <Typography variant='h4'>Description</Typography>
        <Typography
          variant='p'
          sx={{
            display: 'inline-block',
            marginBottom: '2rem',
          }}>
          {description}
        </Typography>
        <Typography variant='h4'>Directions</Typography>
        <Typography
          variant='p'
          sx={{
            display: 'inline-block',
            marginBottom: '2rem',
          }}>
          {directions}
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: '1rem',
          padding: '2rem',
          textAlign: 'left',
          height: 'auto',
          backgroundColor: blue[50],
        }}>
        <Box>
          {like && (
            <FavoriteOutlinedIcon
              fontSize='medium'
              onClick={handleLike}
              style={{ color: 'red' }}
              sx={{
                '&:hover': {
                  color: 'orangered',
                },
              }}
            />
          )}
          {!like && (
            <FavoriteBorderOutlinedIcon
              fontSize='medium'
              onClick={handleLike}
              style={{ color: 'red' }}
              sx={{
                '&:hover': {
                  color: 'orangered',
                },
              }}
            />
          )}
          {bookmark && (
            <BookmarkOutlinedIcon
              fontSize='medium'
              onClick={handleBookmark}
              sx={{
                '&:hover': {
                  color: 'orangered',
                },
              }}
            />
          )}
          {!bookmark && (
            <BookmarkBorderOutlinedIcon
              fontSize='medium'
              onClick={handleBookmark}
              sx={{
                '&:hover': {
                  color: 'orangered',
                },
              }}
            />
          )}
        </Box>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Difficulty:
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          {difficulty}
        </Typography>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Prep Time:
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          {prep_minutes} minutes
        </Typography>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Ingredients:
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          Makes {servings} servings
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          {parsedIngredients}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecipeItem;
