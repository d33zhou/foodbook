import { ImageList, Stack, Typography } from '@mui/material';
import UserRecipeListItem from './UserRecipeListItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserBookmarkList = (props) => {
  const { id } = props;
  const [results, setResults] = useState([]);

  // array of bookmarked recipes of the logged in user
  const allBookmarks = results.length > 0 && results.map(bookmarks => {
    // creator_id is passed for bookmarked recipes (not self recipes) to show the creator in the image tile
    return (
      <UserRecipeListItem
        key={bookmarks.id}
        {...bookmarks}
      />
    );
  });
  
  // get the array of bookmarked recipes of the user (basic details only)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/${id}/bookmarks`)
      .then(res => {
        setResults([...res.data]);
      });
  }, []);
  
  // display image grid for all recipes bookmarked by the user
  return (
    <Stack>
      <Typography variant='h4' color='primary'>
        Bookmarked Recipes
      </Typography>
      <ImageList sx={{height: 912}} cols={3} rowHeight={300}>
        {allBookmarks}
      </ImageList>
    </Stack>
  );
};

export default UserBookmarkList;