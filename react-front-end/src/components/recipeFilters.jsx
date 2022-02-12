import { Box, Button } from '@mui/material';

const RecipeFilters = () => {
  return (
    <Box
      sx={{
        textAlign: 'left',
      }}>
      <Button variant='text' size='large'>
        Difficulty
      </Button>
      <Button variant='text' size='large'>
        Cuisine
      </Button>
      <Button variant='text' size='large'>
        Restrictions
      </Button>
    </Box>
  );
};

export default RecipeFilters;
