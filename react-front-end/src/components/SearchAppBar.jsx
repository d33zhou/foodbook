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
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Autocomplete, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../providers/AuthContext';
import { makeStyles, createStyles } from "@material-ui/core/styles";
const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
    // Default transform is "translate(14px, 20px) scale(1)""
    // This lines up the label with the initial cursor position in the input
    // after changing its padding-left.
    transform: "translate(34px, 20px) scale(1);"
  },
  "& .MuiAutocomplete-inputRoot": {
    color: "white",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: 20,
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
  },
  
});
const useStyles = makeStyles((theme) =>
  createStyles({
    textfield: {
      "& .MuiInputBase-input.MuiAutocomplete-input": {
        color: "white",
        fontSize: 18
      },
      "& #combo-box-demo-label": {
        //or could be targeted through a class
        color: "white"
      },
      "& .MuiButtonBase-root.MuiAutocomplete-clearIndicator": {
        color: "white"
      }
    }
  })
);
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
  const { user,logout } = useAuth();
  const classes = useStyles();
  
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
      <AppBar position='static' >
        <Toolbar>
        <Typography variant='h5'sx={{ fontWeight: 'bold' }} component={Link} to="/feed" color="inherit" style={{ textDecoration: 'none' }}>foodbook</Typography>
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
          {user && <Avatar
          alt={`${user.first_name} ${user.last_name}`}
          src={user.avatar}
          component={Link}
          to="/profile"
          sx={{marginRight:'1rem'}}
          />}
           <Button variant='h6'
            component={Link}
            to='/'
            onClick={() => logout()}>Logout</Button>
          {/* <Search> */}

          {/* <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={event => setQuery(event.target.value)}
            /> */}
          <StyledAutocomplete
            autoHighlight
            freeSolo
            id='combo-box-demo'
            autoFocus={true}
            sx={{
              width: 300,
              paddingTop:'0.5rem',
              paddingBottom:'0.5rem',
            }}
            options={searchResults}
            onChange={(event: any, option: any) => {
                history.push(`/recipe/${option.id}`);                
              
            }}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Search by recipe name...'
                onChange={(event) => setQuery(event.target.value)}
                className={classes.textfield}
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
