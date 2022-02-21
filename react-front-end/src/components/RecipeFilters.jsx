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
      <FormControl sx={{ m: 1}} component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{paddingRight:'2rem'}}>Difficulty Level</FormLabel>
        <FormHelperText >Select any one</FormHelperText>
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
      
      <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormLabel component="legend"  sx={{paddingRight:'6rem'}}>Cuisines</FormLabel>
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
            value='mediterranean' 
            label="Mediterranean"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='american' 
            label="American"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='japanese' 
            label="Japanese"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='italian' 
            label="Italian"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='korean' 
            label="Korean"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='indian' 
            label="Indian"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='greek' 
            label="Greek"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='lebanese' 
            label="Lebanese"
          />
           <FormControlLabel
            control={
              <Radio />
            }
            value='moroccan' 
            label="Moroccan"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='turkish' 
            label="Turkish"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='thai' 
            label="Thai"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='chinese' 
            label="Chinese"
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
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
          <FormControlLabel
            control={
              <Radio />
            }
            value='lactose-free' 
            label="Lactose-free"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='low-carb' 
            label="Low-carb"
          />
          <FormControlLabel
            control={
              <Radio />
            }
            value='kosher' 
            label="Kosher"
          />
        </RadioGroup>
      </FormControl>
      
     </Box>
  );
};

export default RecipeFilters;
