import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { useEffect, useState } from 'react';
import { useAuth } from '../providers/AuthContext';
import axios from 'axios';

const RecipeListItem = (props) => {
  const {
    image_link,
    title,
    description,
    id,
    cuisine,
    prepTime,
    restrictions,
    difficulty
  } = props;
  
  const { user } = useAuth();
  const [like, setLike] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [bookmark, setBookmark] = useState(false);
  const [numberOfBookmarks, setNumberOfBookmarks] = useState(0);

  const handleLike = () => {
    setLike(!like);
    if (!like) {
      const likeURL = `http://localhost:3001/api/like`;
      axios.post(likeURL, { user_id: user.id, recipe_id: id }).then((res) => {
        setNumberOfLikes(res.data.count);
      });
    } else {
      const unlikeURL = `http://localhost:3001/api/unlike`;
      axios.post(unlikeURL, { user_id: user.id, recipe_id: id }).then((res) => {
        setNumberOfLikes(res.data.count);
      });
    }
  };
  
  const handleUserLikes = () => {
    const getLikesURL = `http://localhost:3001/api/like`;
  axios
    .get(getLikesURL, { params: { user_id: user.id, recipe_id: id } })
    .then((res) => {
      const response = res.data;
      for (let obj of response.recipeLikes) {
        if (obj.recipe_id === id) {
          setLike(true);
        }
      }
      setNumberOfLikes(response.count.count);
    })
    .catch((err) => console.log(err.message));
  }
  
  

  const handleBookmark = () => {
    setBookmark(!bookmark);
    if (!bookmark) {
      const bookmarkURL = `http://localhost:3001/api/bookmark`;
      axios
        .post(bookmarkURL, { user_id: user.id, recipe_id: id })
        .then((res) => {
          setNumberOfBookmarks(res.data.count);
        });
    } else {
      const unbookmarkURL = `http://localhost:3001/api/unbookmark`;
      axios
        .post(unbookmarkURL, { user_id: user.id, recipe_id: id })
        .then((res) => {
          setNumberOfBookmarks(res.data.count);
        });
    }
  };

  const handleUserBookmarks = () => {
    const getBookmarksURL = `http://localhost:3001/api/bookmark`;
  axios
    .get(getBookmarksURL, { params: { user_id: user.id, recipe_id: id } })
    .then((res) => {
      const response = res.data;
      for (let obj of response.recipeBookmarks) {
        if (obj.recipe_id === id) {
          setBookmark(true);
        }
      }
      setNumberOfBookmarks(response.count.count);
    })
    .catch((err) => console.log(err.message));
  }
  

    useEffect(() => handleUserLikes());
    useEffect(() => handleUserBookmarks());

  return (
    <Box
      sx={{
        textAlign: 'left',
        marginRight: '4rem',
        marginBottom: '2rem',
        backgroundColor: '#fff',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        transition: 'all .2s',
        overflow: 'hidden',
      }}>
      <Link to={`/recipe/${id}`}>
        <Box
          component='div'
          sx={{
            display: 'block',
            backgroundImage: `url(${image_link})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            maxWidth: '100%',
            height: '400px',
            transition: 'all .2s',
            '&:hover': { transform: 'scale(1.05)' },
          }}></Box>
      </Link>
      <Box
        sx={{
          padding: '2rem',
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}>
          <Box>
            <Stack direction='row' spacing={1}>
              <Chip icon={<DinnerDiningOutlinedIcon />} label={`${cuisine}`} />
              <Chip
                icon={<AccessTimeOutlinedIcon />}
                label={`${prepTime} minutes`}
              />
              {restrictions && (
                <Chip
                  icon={<CheckCircleOutlineOutlinedIcon />}
                  label={restrictions}
                />
              )}
            </Stack>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ position: 'relative', padding: '.1rem .5rem' }}>
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
              <Typography
                variant='p'
                sx={{
                  display: 'flex',
                  zIndex: '500',
                  width: '15px',
                  height: '15px',
                  backgroundColor: 'rgba(25, 118, 210, 0.90)',
                  color: '#fff',
                  fontWeight: 'bold',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '1px',
                  borderRadius: '50%',
                  fontSize: '10px',
                  position: 'absolute',
                  maxHeight: 'content',
                  top: 0,
                  right: 0,
                }}>
                {numberOfLikes}
              </Typography>
            </Box>
            <Box sx={{ position: 'relative', padding: '.1rem .5rem' }}>
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
              <Typography
                variant='p'
                sx={{
                  display: 'flex',
                  zIndex: '500',
                  width: '15px',
                  height: '15px',
                  backgroundColor: 'rgba(25, 118, 210, 0.90)',
                  color: '#fff',
                  fontWeight: 'bold',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '1px',
                  borderRadius: '50%',
                  fontSize: '10px',
                  position: 'absolute',
                  maxHeight: 'content',
                  top: 0,
                  right: 0,
                }}>
                {numberOfBookmarks}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Link to={`/recipe/${id}`}></Link>
        <Typography variant='h3' color='primary' fontWeight='bold' gutterBottom>
          {title}
        </Typography>
        <Typography variant='p' sx={{ display: 'block' }}>
          {description}
        </Typography>
        <Button
          component={Link}
          variant='contained'
          to={`/recipe/${id}`}
          sx={{
            display: 'inline-block',
            marginTop: '2rem',
          }}>
          See Recipe &raquo;
        </Button>
      </Box>
    </Box>
  );
};

export default RecipeListItem;
