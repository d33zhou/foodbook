import { Box, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText,FormGroup,Checkbox } from '@mui/material';
import { flexbox, flexGrow } from '@mui/system';
import { useEffect,useState } from 'react';


const RecipeFilters = (props) => {
  
  const {difficulty,handleDifficulty,cuisine,handleCuisine,diet,handleDiet } = props;
  
  
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
          value={difficulty}
          onChange={handleDifficulty}
        >
          <FormControlLabel
            control={
              <Radio />
            }
            value='all' 
            label="All"
          />
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
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Cuisines</FormLabel>
        <FormHelperText>Select any one</FormHelperText>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          value={cuisine}
          onChange={handleCuisine}
        >
          <FormControlLabel
            control={
              <Radio />
            }
            value='all' 
            label="All"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='spanish' 
            label="Spanish"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='chinese' 
            label="Chinese"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='italian' 
            label="Italian"
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Dietary Restrictions</FormLabel>
        <FormHelperText>Select any one</FormHelperText>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          value={diet}
          onChange={handleDiet}
        >
          <FormControlLabel
            control={
              <Radio />
            }
            value='all' 
            label="All"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='keto' 
            label="Keto"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='vegan' 
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='vegetarian' 
            label="Vegetarian"
          />
        </RadioGroup>
      </FormControl>
      
    </Box>
  );
};

export default RecipeFilters;
