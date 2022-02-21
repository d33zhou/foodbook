import { Box, Link, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router-dom';

const UserRecipeListItem = (props) => {
  const { id, image_link, title, creator_id, first_name, last_name } = props;
  const history = useHistory();

  return (
    <Card sx={{
      width: '23.5%', // for 4 cards per row -- remaining 1.5% from spacing between cards
      boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
      transition: 'all .2s',
      '&:hover': { transform: 'scale(1.05)', cursor: 'pointer' },
    }}>
      <CardActionArea
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
        onClick={() => history.push(`/recipe/${id}`)}
      >
        <CardMedia
          component="img"
          height="200"
          image={image_link}
          alt={title}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            gutterBottom variant="h6"
            component="div"
            sx={{ textAlign: 'left' }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    // <Box
    //   sx={{
    //     backgroundColor: '#fff',
    //     width: '200px',
    //     overflow: 'hidden',
    //     boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
    //   }}
    //   onClick={() => history.push(`/recipe/${id}`)}>
    //   <Box
    //     component='div'
    //     sx={{
    //       display: 'block',
    //       backgroundImage: `url(${image_link})`,
    //       backgroundPosition: 'center',
    //       backgroundSize: 'cover',
    //       width: '200px',
    //       height: '200px',
    //       transition: 'all .2s',
    //       '&:hover': { transform: 'scale(1.05)', cursor: 'pointer' },
    //     }}>
    //     &nbsp;
    //   </Box>

    //   <Typography variant='h6' sx={{ textAlign: 'left', margin: '1rem' }}>
    //     {title}
    //   </Typography>
    // </Box>

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
