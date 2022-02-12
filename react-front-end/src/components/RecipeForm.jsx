import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const RecipeForm = () => {
  // const [difficulty, setDifficulty] = useState('');
  // const [restrictions, setRestrictions] = useState('');
  // const [cuisine, setCuisine] = useState('');
  const [recipe, setRecipe] = useState({
    title: '',
    image: '',
    description: '',
    ingredients: {},
    directions: '',
    prepTime: 0,
    difficulty: '',
    restrictions: '',
    cuisine: '',
  });

  console.log(recipe);
  // console.log(difficulty);

  const handleDifficulty = (event) => {
    // setDifficulty(event.target.value);
    setRecipe({
      ...recipe,
      difficulty: event.target.value,
    });
  };
  const handleRestrictions = (event) => {
    // setRestrictions(event.target.value);
    setRecipe({
      ...recipe,
      restrictions: event.target.value,
    });
  };
  const handleCuisine = (event) => {
    // setCuisine(event.target.value);
    setRecipe({
      ...recipe,
      cuisine: event.target.value,
    });
  };

  return (
    <FormGroup>
      <Box
        component='form'
        sx={{}}
        noValidate
        autoComplete='off'
        onSubmit={(e) => e.preventDefault()}>
        <TextField
          fullWidth
          id='standard-basic'
          label='Recipe Title'
          variant='standard'
          onChange={(e) =>
            setRecipe({
              ...recipe,
              title: e.target.value,
            })
          }
        />
        <TextField
          fullWidth
          id='standard-basic'
          label='Add Image'
          variant='standard'
          onChange={(e) =>
            setRecipe({
              ...recipe,
              image: e.target.value,
            })
          }
        />
        <TextField
          fullWidth
          multiline
          id='standard-basic'
          label='Description'
          variant='standard'
          onChange={(e) =>
            setRecipe({
              ...recipe,
              description: e.target.value,
            })
          }
        />
        <TextField
          sx={{
            width: '30%',
          }}
          id='standard-basic'
          label='Amount'
          variant='standard'
        />
        <TextField
          sx={{
            width: '70%',
          }}
          id='standard-basic'
          label='Ingredient'
          variant='standard'
        />
        <TextField
          sx={{
            width: '30%',
          }}
          id='standard-basic'
          label='Amount'
          variant='standard'
        />
        <TextField
          sx={{
            width: '70%',
          }}
          id='standard-basic'
          label='Ingredient'
          variant='standard'
        />
        <TextField
          sx={{
            width: '30%',
          }}
          id='standard-basic'
          label='Amount'
          variant='standard'
        />
        <TextField
          sx={{
            width: '70%',
          }}
          id='standard-basic'
          label='Ingredient'
          variant='standard'
        />
        <Button variant='outlined'>Add Ingredient</Button>
        <TextField
          fullWidth
          multiline
          id='standard-basic'
          label='Directions'
          variant='standard'
          onChange={(e) =>
            setRecipe({
              ...recipe,
              directions: e.target.value,
            })
          }
        />
        <TextField
          sx={{
            width: '50%',
          }}
          id='standard-basic'
          label='Prep Time (minutes)'
          variant='standard'
          onChange={(e) =>
            setRecipe({
              ...recipe,
              prepTime: e.target.value,
            })
          }
        />

        <FormControl variant='standard' sx={{ m: 1, minWidth: '40%' }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Difficulty
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={recipe.difficulty}
            onChange={handleDifficulty}
            label='Difficulty'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'easy'}>Easy</MenuItem>
            <MenuItem value={'medium'}>Medium</MenuItem>
            <MenuItem value={'hard'}>Hard</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant='standard' sx={{ m: 1, minWidth: '40%' }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Restrictions
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={recipe.restrictions}
            onChange={handleRestrictions}
            label='Restrictions'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
            <MenuItem value={'vegan'}>Vegan</MenuItem>
            <MenuItem value={'kosher'}>Kosher</MenuItem>
            <MenuItem value={'keto'}>Keto</MenuItem>
            <MenuItem value={'lactose-free'}>Lactose-Free</MenuItem>
            <MenuItem value={'low-carb'}>Low Carb</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant='standard' sx={{ m: 1, minWidth: '40%' }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Cuisine
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={recipe.cuisine}
            onChange={handleCuisine}
            label='Cuisine'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'american'}>American</MenuItem>
            <MenuItem value={'chinese'}>Chinese</MenuItem>
            <MenuItem value={'japanese'}>Japanese</MenuItem>
            <MenuItem value={'italian'}>Italian</MenuItem>
            <MenuItem value={'korean'}>Korean</MenuItem>
            <MenuItem value={'indian'}>Indian</MenuItem>
            <MenuItem value={'greek'}>Greek</MenuItem>
            <MenuItem value={'spanish'}>Spanish</MenuItem>
            <MenuItem value={'mediterranean'}>Mediterranean</MenuItem>
            <MenuItem value={'lebanese'}>Lebanese</MenuItem>
            <MenuItem value={'moroccan'}>Moroccan</MenuItem>
            <MenuItem value={'turkish'}>Turkish</MenuItem>
            <MenuItem value={'thai'}>Thai</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained'>Submit</Button>
      </Box>
    </FormGroup>
  );
};

export default RecipeForm;
