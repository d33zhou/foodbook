import { IconButton, ImageListItem, ImageListItemBar, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const UserRecipeListItem = (props) => {
  const { image_link, title, creator_id, first_name, last_name } = props;

  return (
    <ImageListItem rows={1}>
      <Box
        component="img"
        sx={{
          height: 1/1,
          width: 1/1
        }}
        src={`${image_link}?w=164&h=164&fit=crop&auto=format`}
      />
      <ImageListItemBar
        title={title}
        subtitle={creator_id && `by ${first_name} ${last_name[0]}.` || null}
        actionIcon={creator_id &&
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 054)' }}
          >
            <StarIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};

export default UserRecipeListItem;