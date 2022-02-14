import { Box, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import { blue } from '@mui/material/colors';

const RecipeItem = () => {
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
          Really Really Good Pizza!
        </Typography>
        <img
          src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png'
          alt=''
        />
        <Typography variant='p'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
          obcaecati eaque eius fuga eum nihil, ipsum neque fugiat laboriosam,
          facere unde nam, laborum aspernatur veniam inventore vero quos iure
          deserunt!
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
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Prep Time:
        </Typography>
        <Typography variant='h6' color='primary' fontWeight='bold' gutterBottom>
          Ingredients:
        </Typography>
      </Box>
    </Box>
  );
};

export default RecipeItem;
