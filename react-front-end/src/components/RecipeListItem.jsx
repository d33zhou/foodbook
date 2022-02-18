import { Box, Chip, Stack, Typography } from '@mui/material';
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
  } = props;
  // console.log(id);
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

  return (
    <Box
      sx={{
        textAlign: 'left',
        paddingRight: '4rem',
      }}>
      <Link to={`/recipe/${id}`}>
        <img src={image_link} alt='' />
      </Link>
      <Stack direction='row' spacing={1}>
        <Chip icon={<DinnerDiningOutlinedIcon />} label={`${cuisine}`} />
        <Chip icon={<AccessTimeOutlinedIcon />} label={`${prepTime} minutes`} />
        {restrictions && (
          <Chip
            icon={<CheckCircleOutlineOutlinedIcon />}
            label={restrictions}
          />
        )}
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
        <Typography variant='p'>{numberOfLikes}</Typography>
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
        <Typography variant='p'>{numberOfBookmarks}</Typography>
      </Stack>
      <Link to={`/recipe/${id}`}></Link>
      <Typography variant='h3' color='primary' fontWeight='bold' gutterBottom>
        {title}
      </Typography>
      <Typography variant='p'>{description}</Typography>
    </Box>
  );
};

export default RecipeListItem;
