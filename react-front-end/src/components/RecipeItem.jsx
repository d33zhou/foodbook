import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { blue } from '@mui/material/colors';

const RecipeItem = () => {
  const [results, setResults] = useState([]);

  console.log(results[0]);

  useEffect(() => {
    const testURL = `http://localhost:3001/api/recipes/`;
    axios.get(testURL).then((response) => {
      setResults([...response.data]);
      // console.log(response.data);
    });
  }, []);

  useEffect(() => {
    const testURL = `http://localhost:3001/api/ingredients/`;
    axios.get(testURL).then((response) => {
      setResults([...response.data]);
      // console.log(response.data);
    });
  }, []);

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
          {results[0].title}
        </Typography>
        <img src={results[0].image_link} alt='' />
        <Typography variant='p'>{results[0].instructions}</Typography>
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
          {results[0].difficulty}
        </Typography>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Prep Time:
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          {results[0].prep_minutes} minutes
        </Typography>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Ingredients:
        </Typography>
        <Typography variant='p' color='primary' fontWeight='bold' gutterBottom>
          {results[0].prep_minutes}
        </Typography>
      </Box>
    </Box>
  );
};

export default RecipeItem;
