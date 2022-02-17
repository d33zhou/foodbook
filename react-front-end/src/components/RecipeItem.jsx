import { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { blue } from '@mui/material/colors';
import { useParams } from 'react-router-dom';

const RecipeItem = () => {
  const [results, setResults] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const {
    title,
    image_link,
    instructions,
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

  console.log('results ', results);
  console.log('ingredients', ingredients);

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
        console.log(response.data);
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
        <img src={image_link} alt='' />
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

          <Chip
            avatar={<Avatar alt='Natacha' src={avatar} />}
            label={`${first_name} ${last_name}`}
            color='secondary'
          />
        </Stack>
        <Typography variant='p'>{instructions}</Typography>
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
          <FavoriteBorderOutlinedIcon
            fontSize='medium'
            color='primary'
            sx={{
              '&:hover': {
                color: 'orangered',
              },
            }}
          />
          <BookmarkBorderOutlinedIcon
            fontSize='medium'
            color='primary'
            sx={{
              '&:hover': {
                color: 'orangered',
              },
            }}
          />
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
