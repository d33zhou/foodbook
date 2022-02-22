import { Typography, Card, CardContent, CardMedia, CardActionArea, CardActions, Avatar, Chip } from '@mui/material';
import { useHistory } from 'react-router-dom';

const UserRecipeListItem = (props) => {
  const { id, image_link, title, creator_id, first_name, last_name, avatar } = props;
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
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              textAlign: 'left',
              fontWeight: 'light',
              boxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              minHeight: '3em',
              maxHeight: '3em',
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      {creator_id &&
        <CardActions>
          <Chip
            avatar={<Avatar src={avatar} />}
            label={`${first_name} ${last_name}`}
            color='primary'
            onClick={() => history.push(`/users/${creator_id}`)}
          />
        </CardActions>
      }
    </Card>
  );
};

export default UserRecipeListItem;
