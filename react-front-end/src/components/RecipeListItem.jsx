import { Box, Typography } from '@mui/material';

const RecipeListItem = (props) => {
  const { image_link, title, instructions, id } = props;

  return (
    <Box
      sx={{
        textAlign: 'left',
        paddingRight: '4rem',
      }}>
      <img src={image_link} alt='' />
      <Typography variant='h3' color='primary' fontWeight='bold' gutterBottom>
        {title}
      </Typography>
      <Typography variant='p'>{instructions}</Typography>
    </Box>
  );
};

export default RecipeListItem;
