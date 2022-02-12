import { Box, Button } from '@mui/material';
import { flexbox, flexGrow } from '@mui/system';

const RecipeFilters = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexGrow: 4,
        width: '100%',
        // textAlign: 'left',
      }}>
      <Button variant='text' size='large'>
        Difficulty
      </Button>
      <Button variant='text' size='medium'>
        Easy
      </Button>
      <Button variant='text' size='medium'>
        Medium
      </Button>
      <Button variant='text' size='medium'>
        Difficult
      </Button>
      <Button variant='text' size='large'>
        Cuisine
      </Button>
      <Button variant='text' size='medium'>
        Thai
      </Button>
      <Button variant='text' size='medium'>
        Indian
      </Button>
      <Button variant='text' size='large'>
        Restrictions
      </Button>
      <Button variant='text' size='medium'>
        Vegan/Vegetarian
      </Button>
      <Button variant='text' size='medium'>
        Keto
      </Button>
    </Box>
  );
};

export default RecipeFilters;
