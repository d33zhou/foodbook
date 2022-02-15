import { Box, Chip, Stack, Typography } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import { Link } from 'react-router-dom';

const RecipeListItem = (props) => {
  const {
    image_link,
    title,
    instructions,
    id,
    cuisine,
    prepTime,
    restrictions,
  } = props;
  // console.log(id);
  return (
    <Box
      sx={{
        textAlign: 'left',
        paddingRight: '4rem',
      }}>
      <Link to={`/recipe/${id}`}>
        <img src={image_link} alt='' />
      </Link>
      <Stack direction='row' spacing={1}>
        <Chip icon={<DinnerDiningOutlinedIcon />} label={`${cuisine}`} />
        <Chip icon={<AccessTimeOutlinedIcon />} label={`${prepTime} minutes`} />
        {restrictions && (
          <Chip
            icon={<CheckCircleOutlineOutlinedIcon />}
            label={restrictions}
          />
        )}
      </Stack>
      <Link to={`/recipe/${id}`}></Link>
      <Typography variant='h3' color='primary' fontWeight='bold' gutterBottom>
        {title}
      </Typography>
      <Typography variant='p'>{instructions}</Typography>
    </Box>
  );
};

export default RecipeListItem;
