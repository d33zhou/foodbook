import { ImageList, Stack, Typography } from '@mui/material';
import UserRecipeListItem from './UserRecipeListItem';

const recipeAPI = [
  {
    id: 1,
    image_link: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    id: 2,
    image_link: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    id: 3,
    image_link: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    id: 4,
    image_link: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    id: 5,
    image_link: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    id: 6,
    image_link: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    id: 7,
    image_link: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    id: 8,
    image_link: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    id: 9,
    image_link: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    id: 10,
    image_link: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    id: 11,
    image_link: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    id: 12,
    image_link: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const allRecipes = recipeAPI.map(recipe => {
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
        Created Recipes
      </Typography>
      <ImageList cols={5} rowHeight={164}>
        {allRecipes}
      </ImageList>
    </Stack>
  );
};

export default UserRecipeList;