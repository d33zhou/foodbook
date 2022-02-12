import { Box, Typography } from '@mui/material';

const RecipeListItem = (props) => {
  const { image, title, description, id } = props;

  return (
    <Box
      sx={{
        textAlign: 'left',
        paddingRight: '4rem',
      }}>
      <Typography variant='h3' color='primary' fontWeight='bold' gutterBottom>
        {title}
      </Typography>
      <Typography variant='p'>{description}</Typography>
    </Box>
  );
};

export default RecipeListItem;