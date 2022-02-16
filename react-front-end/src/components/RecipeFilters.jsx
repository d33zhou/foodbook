import { Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';
import { flexbox, flexGrow } from '@mui/system';
import { useEffect,useState } from 'react';


const RecipeFilters = (props) => {
  
  const {onClick ,value,changeInRadio } = props;
  
  console.log(value);
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
      <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Difficulty Level</FormLabel>
        <FormHelperText>Select any one</FormHelperText>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          value={value}
          onChange={changeInRadio}
        >
          <FormControlLabel
            control={
              <Radio />
            }
            value='easy' 
            label="Easy"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='moderate' 
            label="Moderate"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='challenging' 
            label="Challenging"
          />
        </RadioGroup>
      </FormControl>
      </Box>
      <Button variant='text' size='large' onClick={onClick} value={value}>
        Apply
      </Button>
      <Button variant='text' size='large'>
        Cuisine
      </Button>
      <Button variant='text' size='medium' value='thai' onClick={onClick} >
        Thai
      </Button>
      <Button variant='text' size='medium' value='indian' onClick={onClick}>
        Indian
      </Button>
      <Button variant='text' size='large'>
        Restrictions
      </Button>
      <Button variant='text' size='medium' value='vegan' onClick={onClick}>
        Vegan
      </Button>
      <Button variant='text' size='medium' value='vegetarian' onClick={onClick}>
        Vegetarian
      </Button>
      <Button variant='text' size='medium' value='vegan' onClick={onClick}>
        Vegetarian
      </Button>
      <Button variant='text' size='medium'>
        Keto
      </Button>
    </Box>
  );
};

export default RecipeFilters;
