import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { blue } from '@mui/material/colors';
import { useParams } from 'react-router-dom';

const RecipeItem = () => {
  const [results, setResults] = useState({});
  const [ingredients, setIngredients] = useState([]);

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
          flexGrow: 2,
          width: '60%',
          overflow: 'hidden',
          textAlign: 'left',
        }}>
        <Typography
          variant='h3'
          component='h1'
          color='primary'
          fontWeight='bold'
          gutterBottom>
          {results.title}
        </Typography>
        <img src={results.image_link} alt='' />
        <Typography variant='p'>{results.instructions}</Typography>
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
          {results.difficulty}
        </Typography>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Prep Time:
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          {results.prep_minutes} minutes
        </Typography>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Ingredients:
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          {parsedIngredients}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecipeItem;
