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
  const [difficulty, setDifficulty] = useState('');
  const [restrictions, setRestrictions] = useState('');
  const [cuisine, setCuisine] = useState('');

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
  };
  const handleRestrictions = (event) => {
    setDifficulty(event.target.value);
  };
  const handleCuisine = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <FormGroup>
      <Box component='form' sx={{}} noValidate autoComplete='off'>
        <TextField
          fullWidth
          id='standard-basic'
          label='Recipe Title'
          variant='standard'
        />
        <TextField
          fullWidth
          id='standard-basic'
          label='Add Image'
          variant='standard'
        />
        <TextField
          fullWidth
          multiline
          id='standard-basic'
          label='Description'
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
        />
        <TextField
          sx={{
            width: '50%',
          }}
          id='standard-basic'
          label='Prep Time (minutes)'
          variant='standard'
        />

        <FormControl variant='standard' sx={{ m: 1, minWidth: '40%' }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Difficulty
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={difficulty}
            onChange={handleDifficulty}
            label='Difficulty'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Easy</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>Hard</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant='standard' sx={{ m: 1, minWidth: '40%' }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Restrictions
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={restrictions}
            onChange={handleRestrictions}
            label='Restrictions'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Easy</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>Hard</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant='standard' sx={{ m: 1, minWidth: '40%' }}>
          <InputLabel id='demo-simple-select-standard-label'>
            Cuisine
          </InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={cuisine}
            onChange={handleCuisine}
            label='Cuisine'>
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Easy</MenuItem>
            <MenuItem value={20}>Medium</MenuItem>
            <MenuItem value={30}>Hard</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained'>Submit</Button>
      </Box>
    </FormGroup>
  );
};

export default RecipeForm;
