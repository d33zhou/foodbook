import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Autocomplete, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchAppBar = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (query) {
      const searchURL = `http://localhost:3001/api/recipes/search`;
      axios.post(searchURL, { title: query }).then((response) => {
        setSearchResults([...response.data]);
        // console.log(response.data);
      });
    }
  }, [query]);

  let options = [...searchResults];

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: '4rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Button
            variant='h6'
            component={Link}
            to='/create'
            sx={{
              flexGrow: 1,
              display: { sm: 'block' },
            }}>
            + Create New Recipe
          </Button>
          {/* <Search> */}

          {/* <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={event => setQuery(event.target.value)}
            /> */}
          <Autocomplete
            autoHighlight
            freeSolo
            id='combo-box-demo'
            autoFocus={true}
            sx={{ width: 300 }}
            options={searchResults}
            onChange={(event: any, option: any) => {
              history.push(`/recipe/${option.id}`);
            }}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Recipe Name'
                onChange={(event) => setQuery(event.target.value)}
              />
            )}
          />
          <SearchIcon />
          {/* </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchAppBar;
