import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useAuth } from '../providers/AuthContext';

const RecipeForm = () => {
  const history = useHistory();
  const { user } = useAuth();

  const [recipe, setRecipe] = useState({
    title: '',
    image: '',
    description: '',
    directions: '',
    prepTime: 0,
    difficulty: '',
    restrictions: '',
    cuisine: '',
    servings: 0,
  });
  const [ingredientFields, setIngredientFields] = useState([
    { amount: '', ingredientName: '' },
  ]);

  // console.log(recipe);
  // console.log(recipeId);
  // console.log(ingredientFields);

  const handleDifficulty = (event) => {
    setRecipe({
      ...recipe,
      difficulty: event.target.value,
    });
  };
  const handleRestrictions = (event) => {
    setRecipe({
      ...recipe,
      restrictions: event.target.value,
    });
  };
  const handleCuisine = (event) => {
    setRecipe({
      ...recipe,
      cuisine: event.target.value,
    });
  };

  const handleChangeInput = (index, event) => {
    const values = [...ingredientFields];
    values[index][event.target.name] = event.target.value;
    // values[index].recipeId = recipeId;
    setIngredientFields(values);
  };

  const handleAddIngredientField = () => {
    setIngredientFields([
      ...ingredientFields,
      { amount: '', ingredientName: '' },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(recipe));
    // console.log(JSON.stringify(ingredientFields));
    // console.log('ingredientFields', ingredientFields);
    const recipeBody = { ...recipe, creator_id: user.id };
    axios
      .post('http://localhost:3001/api/recipes/', recipeBody)
      .then((response) => response.data)
      .then((recipeObj) => {
        console.log('recipeObj', recipeObj);
        const ingredientsBody = ingredientFields.map((ingredient) => ({
          ...ingredient,
          recipeId: recipeObj.id,
        }));
        console.log(ingredientsBody);
        const requests = [];
        for (let i = 0; i < ingredientsBody.length; i++) {
          requests.push({
            url: 'http://localhost:3001/api/ingredients/',
            body: ingredientsBody[i],
          });
        }
        const promises = requests.map((request) =>
          axios.post(request.url, request.body)
        );
        Promise.all(promises).then(history.push(`/recipe/${recipeObj.id}`));
      })
      .catch((err) => console.log('Error: ', err.message));
  };
  // .then(history.push(`/recipe/${recipeObj.id}`))
  return (
    <Box
      sx={{
        width: '100%',
      }}>
      <Typography
        variant='h2'
        component='h1'
        gutterBottom
        sx={{ textAlign: 'left' }}>
        Create a New Recipe
      </Typography>
      <FormGroup>
        <Box
          component='form'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& > :not(style)': {
              marginBottom: '1rem',
            },
          }}
          noValidate
          autoComplete='off'
          onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
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
            label='Description'
            variant='standard'
            onChange={(e) =>
              setRecipe({
                ...recipe,
                description: e.target.value,
              })
            }
          />

          {ingredientFields.map((ingredient, index) => {
            return (
              <div key={index}>
                <TextField
                  sx={{
                    width: '30%',
                  }}
                  name='amount'
                  label='Amount'
                  variant='standard'
                  value={ingredient.amount}
                  onChange={(e) => handleChangeInput(index, e)}
                />

                <TextField
                  sx={{
                    width: '70%',
                  }}
                  name='ingredientName'
                  label='Ingredient'
                  variant='standard'
                  value={ingredient.ingredientName}
                  onChange={(e) => handleChangeInput(index, e)}
                />
              </div>
            );
          })}

          <Button
            variant='outlined'
            onClick={() => handleAddIngredientField()}
            sx={{
              alignSelf: 'flex-end',
            }}>
            + Add Ingredient
          </Button>

          <TextField
            fullWidth
            multiline
            label='Directions'
            variant='standard'
            onChange={(e) =>
              setRecipe({
                ...recipe,
                directions: e.target.value,
              })
            }
          />

          <Box
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'space-between',
              columnGap: '4rem',
            }}>
            <TextField
              sx={{
                flexGrow: 1,
              }}
              label='Prep Time (minutes)'
              variant='standard'
              onChange={(e) =>
                setRecipe({
                  ...recipe,
                  prepTime: e.target.value,
                })
              }
            />

            <TextField
              sx={{
                flexGrow: 1,
              }}
              label='Number of Servings)'
              variant='standard'
              onChange={(e) =>
                setRecipe({
                  ...recipe,
                  servings: e.target.value,
                })
              }
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'space-between',
              columnGap: '4rem',
            }}>
            <FormControl variant='standard' sx={{ flexGrow: 1 }}>
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

            <FormControl variant='standard' sx={{ flexGrow: 1 }}>
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

            <FormControl variant='standard' sx={{ flexGrow: 1 }}>
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
          </Box>
          <Button
            onClick={handleSubmit}
            variant='contained'
            sx={{ marginTop: '2rem' }}>
            Submit
          </Button>
        </Box>
      </FormGroup>
    </Box>
  );
};

export default RecipeForm;
