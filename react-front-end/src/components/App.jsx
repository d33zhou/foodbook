import axios from "axios";
import {
  Box,
  Container,
  CssBaseline,
  ScopedCssBaseline,
  Typography,
} from "@mui/material";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import ContainerLogin from "./ContainerLogin";
import SearchAppBar from "./SearchAppBar";
import Navigation from "./Navigation";
import RecipeList from "./RecipeList";
import RecipeFilters from "./RecipeFilters";
import RecipeForm from "./RecipeForm";
import User from "./User";
import RecipeItem from "./RecipeItem";

import { AuthProvider } from "../providers/AuthContext";
import { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState([]);
  const difficulties = ["easy", "moderate", "challenging"];
  const cuisine = [
    "american",
    "chinese",
    "japanese",
    "italian",
    "korean",
    "indian",
    "greek",
    "spanish",
    "mediterranean",
    "lebanese",
    "moroccan",
    "turkish",
    "thai",
  ];
  const restrictions = [
    "vegetarian",
    "vegan",
    "kosher",
    "keto",
    "lactose-free",
    "low-carb",
  ];
  const [value, setValue] = useState("");

  const changeInRadio = (event) => {
    setValue(event.target.value);
  };

  const onClick = (event) => {
    if (value === "easy") {
      const testURL = `http://localhost:3001/api/filter/difficulty`;
      axios
        .get(testURL)
        .then((response) => {
          console.log(response.data);
          // setResults([...response.data]);
        });
    }
    if (event.currentTarget.value === "explore") {
      const testURL = `http://localhost:3001/api/recipes/`;
      axios.get(testURL).then((response) => {
        setResults([...response.data]);
        // console.log(response.data);
      });
    }
  };

  // useEffect(() => {
  //   const testURL = `http://localhost:3001/api/recipes/`;
  //   axios.get(testURL).then((response) => {
  //     setResults([...response.data]);
  //     // console.log(response.data);
  //   });
  // }, []);

  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <Box
          className="App"
          sx={{
            backgroundColor: "#f0f2f5",
            height: "100%",
          }}
        >
          <Switch>
            <Route exact path="/">
              <Container maxWidth="lg">
                <ContainerLogin />
              </Container>
            </Route>
            <Route path="/feed">
              <SearchAppBar />
              <Box
                maxWidth="lg"
                mx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  columnGap: "4rem",
                  margin: "0 auto",
                }}
              >
                <Navigation onClick={onClick} />
                <Box>
                  <RecipeList results={results} />
                </Box>
                <RecipeFilters
                  onClick={onClick}
                  value={value}
                  changeInRadio={changeInRadio}
                />
              </Box>
            </Route>
            <Route path="/create">
              {/* Recipe Form */}
              <Container maxWidth="sm">
                <h2>Recipe Form Component</h2>
                <Box
                  maxWidth="lg"
                  mx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    columnGap: "4rem",
                    margin: "0 auto",
                  }}
                >
                  <Navigation />

                  <RecipeForm />
                </Box>
              </Container>
            </Route>
            <Route path="/recipe/:id">
              {/* Recipe Item */}
              <Container maxWidth="md">
                <h2>Recipe Item Component</h2>
                <Box
                  maxWidth="lg"
                  mx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    columnGap: "4rem",
                    margin: "0 auto",
                  }}
                >
                  <Navigation />
                  <RecipeItem />
                </Box>
              </Container>
            </Route>

            <Route path="/profile">
              <Container>
                <h1>User Profile</h1>
                <User />
              </Container>
            </Route>

            <Route path="/404" render={() => <h2>404 - Not Found</h2>} />
            <Redirect to="/404" />
          </Switch>
        </Box>
      </Router>
    </AuthProvider>
  );
}

export default App;
