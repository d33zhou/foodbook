import { Box, Skeleton, Typography } from '@mui/material';
import UserRecipeListItem from './UserRecipeListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserRecipeList = (props) => {
  const { id, first_name, loading, setLoading } = props;
  const [results, setResults] = useState([]);

  // array of recipes that the logged in user created
  const allRecipes =
    results.length > 0 &&
    results.map((recipe) => {
      return <UserRecipeListItem key={recipe.id} {...recipe} />;
    });

  const allSkeletons = Array(3).fill(null).map((element, index) => {
    return <Skeleton key={index} variant='rectangular' width={226} height={271} />;
  });

  // get the array of recipes created by the user (basic details only)
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${id}/recipes`).then((res) => {
      setResults([...res.data]);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    });
  }, [id]);

  // display image grid for all recipes created by the user
  return (
    <Box>
      <Typography
        variant='h4'
        color='primary'
        gutterBottom
        sx={{ textAlign: 'left' }}>
        {(first_name && `${first_name}'s Cookbook`) || 'Your Cookbook'}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: '1rem',
          rowGap: '1rem',
          flexWrap: 'wrap',
        }}
      >

        {loading ? (
          <>
            {allSkeletons}
          </>
        ) : (
          <>
            {allRecipes.length > 0 ? allRecipes :
              <Typography variant='h6' color='secondary'>
                No recipes found. Time to get cooking!
              </Typography>
            }
          </>
        )}

      </Box>
    </Box>
  );
};

export default UserRecipeList;
