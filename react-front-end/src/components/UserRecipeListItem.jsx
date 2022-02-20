import { Box, Link, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router-dom';

const UserRecipeListItem = (props) => {
  const { id, image_link, title, creator_id, first_name, last_name } = props;
  const history = useHistory();

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        width: '200px',
        overflow: 'hidden',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      }}
      onClick={() => history.push(`/recipe/${id}`)}>
      <Box
        component='div'
        sx={{
          display: 'block',
          backgroundImage: `url(${image_link})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '200px',
          height: '200px',
          transition: 'all .2s',
          '&:hover': { transform: 'scale(1.05)', cursor: 'pointer' },
        }}>
        &nbsp;
      </Box>

      <Typography variant='h6' sx={{ textAlign: 'left', margin: '1rem' }}>
        {title}
      </Typography>
    </Box>

    // <ImageListItem rows={1} onClick={() => history.push(`/recipe/${id}`)}>
    //   <Box
    //     component="img"
    //     sx={{
    //       height: 1/1,
    //       width: 1/1
    //     }}
    //     src={`${image_link}?w=164&h=164&fit=crop&auto=format`}
    //   />
    //   <ImageListItemBar
    //     title={title}
    //     subtitle={creator_id && `by ${first_name} ${last_name[0]}.` || null}
    //     actionIcon={creator_id &&
    //       <IconButton
    //         sx={{ color: 'rgba(255, 255, 255, 054)' }}
    //       >
    //         <StarIcon />
    //       </IconButton>
    //     }
    //   />
    // </ImageListItem>
  );
};

export default UserRecipeListItem;
