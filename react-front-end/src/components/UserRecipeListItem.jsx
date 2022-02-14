import { IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const image1 = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'

const UserRecipeListItem = (props) => {
  const { image_link, title, creator_id } = props;

  return (
    <ImageListItem>
      <img
        src={`${image_link}?w=248&fit=crop&auto=format`}
        srcSet={`${image_link}?w=248&fit=crop&auto=format&dpr=2 2x`}
      />
      <ImageListItemBar
        title={title}
        subtitle={creator_id || null}
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