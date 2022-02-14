import { ImageList, Stack, Typography } from '@mui/material';
import UserRecipeListItem from './UserRecipeListItem';

const bookmarkAPI = [
  {
    id: 1,
    image_link: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    creator_id: 'Some User',
  },
  {
    id: 2,
    image_link: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    creator_id: 'Some User',
  },
  {
    id: 3,
    image_link: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    creator_id: 'Some User',
  },
  {
    id: 4,
    image_link: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    creator_id: 'Some User',
  },
  {
    id: 5,
    image_link: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    creator_id: 'Some User',
  },
  {
    id: 8,
    image_link: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    creator_id: 'Some User',
  },
  {
    id: 9,
    image_link: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    creator_id: 'Some User',
  },
  {
    id: 10,
    image_link: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    creator_id: 'Some User',
  },
];

const allRecipes = bookmarkAPI.map(recipe => {
  return (
    <UserRecipeListItem
      key={recipe.id}
      {...recipe}
    />
  );
});

const UserRecipeList = (props) => {
  return (
    <Stack>
      <Typography variant='h4' color='primary'>
        Bookmarked Recipes
      </Typography>
      <ImageList cols={5} rowHeight={164}>
        {allRecipes}
      </ImageList>
    </Stack>
  );
};

export default UserRecipeList;