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
import UserPublicProfile from "./UserPublicProfile";
import RecipeItem from "./RecipeItem";
import PrivateRoute from "./PrivateRoute";

import { AuthProvider, useAuth } from "../providers/AuthContext";
import { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [difficulty, setDifficulty] = useState("all");
  const [cuisine, setCuisine] = useState("all");
  const [diet, setDiet] = useState("all");

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);
    if (cuisine === "all" && event.target.value === "all" && diet === "all") {
      setResults(fullData);
    } else if (
      cuisine !== "all" &&
      event.target.value === "all" &&
      diet === "all"
    ) {
      const difficultyResults = [
        ...fullData.filter((recipe) => {
          return recipe.cuisine === cuisine;
        }),
      ];
      setResults(difficultyResults);
    } else if (
      cuisine === "all" &&
      diet === "all" &&
      event.target.value !== "all"
    ) {
      const difficultyResults = [
        ...fullData.filter((recipe) => {
          return recipe.difficulty === event.target.value;
        }),
      ];
      setResults(difficultyResults);
    } else if (
      cuisine === "all" &&
      diet !== "all" &&
      event.target.value !== "all"
    ) {
      const difficultyResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.difficulty === event.target.value &&
            recipe.dietary_restriction === diet
          );
        }),
      ];
      setResults(difficultyResults);
    } else if (
      cuisine === "all" &&
      diet !== "all" &&
      event.target.value === "all"
    ) {
      const difficultyResults = [
        ...fullData.filter((recipe) => {
          return recipe.dietary_restriction === diet;
        }),
      ];
      setResults(difficultyResults);
    } else if (
      cuisine !== "all" &&
      diet !== "all" &&
      event.target.value === "all"
    ) {
      const difficultyResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.dietary_restriction === diet && recipe.cuisine === cuisine
          );
        }),
      ];
      setResults(difficultyResults);
    } else if (
      cuisine !== "all" &&
      diet === "all" &&
      event.target.value !== "all"
    ) {
      const difficultyResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.difficulty === event.target.value &&
            recipe.cuisine === cuisine
          );
        }),
      ];
      setResults(difficultyResults);
    } else {
      const difficultyResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.difficulty === event.target.value &&
            recipe.cuisine === cuisine &&
            recipe.dietary_restriction === diet
          );
        }),
      ];
      setResults(difficultyResults);
    }
  };

  const handleCuisine = (event) => {
    setCuisine(event.target.value);
    if (
      difficulty === "all" &&
      event.target.value === "all" &&
      diet === "all"
    ) {
      setResults(fullData);
    } else if (
      difficulty !== "all" &&
      event.target.value === "all" &&
      diet === "all"
    ) {
      const cuisineResults = [
        ...fullData.filter((recipe) => {
          return recipe.difficulty === difficulty;
        }),
      ];
      setResults(cuisineResults);
    } else if (
      difficulty === "all" &&
      event.target.value !== "all" &&
      diet === "all"
    ) {
      const cuisineResults = [
        ...fullData.filter((recipe) => {
          return recipe.cuisine === event.target.value;
        }),
      ];
      setResults(cuisineResults);
    } else if (
      difficulty === "all" &&
      diet !== "all" &&
      event.target.value === "all"
    ) {
      const cuisineResults = [
        ...fullData.filter((recipe) => {
          return recipe.dietary_restriction === diet;
        }),
      ];
      setResults(cuisineResults);
    } else if (
      difficulty === "all" &&
      diet !== "all" &&
      event.target.value !== "all"
    ) {
      const cuisineResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.dietary_restriction === diet &&
            recipe.cuisine === event.target.value
          );
        }),
      ];
      setResults(cuisineResults);
    } else if (
      difficulty !== "all" &&
      diet !== "all" &&
      event.target.value === "all"
    ) {
      const cuisineResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.dietary_restriction === diet &&
            recipe.difficulty === difficulty
          );
        }),
      ];
      setResults(cuisineResults);
    } else if (
      difficulty !== "all" &&
      diet === "all" &&
      event.target.value !== "all"
    ) {
      const cuisineResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.cuisine === event.target.value &&
            recipe.difficulty === difficulty
          );
        }),
      ];
      setResults(cuisineResults);
    } else {
      const cuisineResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.cuisine === event.target.value &&
            recipe.difficulty === difficulty &&
            recipe.dietary_restriction === diet
          );
        }),
      ];
      setResults(cuisineResults);
    }
  };

  const handleDiet = (event) => {
    setDiet(event.target.value);
    if (
      difficulty === "all" &&
      event.target.value === "all" &&
      cuisine === "all"
    ) {
      setResults(fullData);
    } else if (
      difficulty !== "all" &&
      event.target.value === "all" &&
      cuisine === "all"
    ) {
      const dietResults = [
        ...fullData.filter((recipe) => {
          return recipe.difficulty === difficulty;
        }),
      ];
      setResults(dietResults);
    } else if (
      difficulty === "all" &&
      event.target.value !== "all" &&
      cuisine === "all"
    ) {
      const dietResults = [
        ...fullData.filter((recipe) => {
          return recipe.dietary_restriction === event.target.value;
        }),
      ];
      setResults(dietResults);
    } else if (
      difficulty === "all" &&
      cuisine !== "all" &&
      event.target.value === "all"
    ) {
      const dietResults = [
        ...fullData.filter((recipe) => {
          return recipe.cuisine === cuisine;
        }),
      ];
      setResults(dietResults);
    } else if (
      difficulty === "all" &&
      cuisine !== "all" &&
      event.target.value !== "all"
    ) {
      const dietResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.dietary_restriction === event.target.value &&
            recipe.cuisine === cuisine
          );
        }),
      ];
      setResults(dietResults);
    } else if (
      difficulty !== "all" &&
      cuisine !== "all" &&
      event.target.value === "all"
    ) {
      const dietResults = [
        ...fullData.filter((recipe) => {
          return recipe.cuisine === cuisine && recipe.difficulty === difficulty;
        }),
      ];
      setResults(dietResults);
    } else if (
      difficulty !== "all" &&
      cuisine === "all" &&
      event.target.value !== "all"
    ) {
      const dietResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.dietary_restriction === event.target.value &&
            recipe.difficulty === difficulty
          );
        }),
      ];
      setResults(dietResults);
    } else {
      const dietResults = [
        ...fullData.filter((recipe) => {
          return (
            recipe.dietary_restriction === event.target.value &&
            recipe.difficulty === difficulty &&
            recipe.cuisine === cuisine
          );
        }),
      ];
      setResults(dietResults);
    }
  };

  useEffect(() => {
    const testURL = `http://localhost:3001/api/recipes`;
    axios.get(testURL).then((response) => {
      setResults(response.data);
      setFullData(response.data);
    });
  }, []);

  return (
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
          <PrivateRoute path="/feed">
            <SearchAppBar />
            <Container maxWidth="lg">
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
                <Box>
                  {results.length === 0 && (
                    <Typography
                      variant="h3"
                      component="h1"
                      color="primary"
                      fontWeight="bold"
                      gutterBottom
                      width="700px"
                    >
                      Sorry! There are no results. Please try another filter.
                    </Typography>
                  )}
                  <RecipeList results={results} />
                </Box>
                <RecipeFilters
                  difficulty={difficulty}
                  cuisine={cuisine}
                  diet={diet}
                  handleDifficulty={handleDifficulty}
                  handleCuisine={handleCuisine}
                  handleDiet={handleDiet}
                />
              </Box>
            </Container>
          </PrivateRoute>

          <PrivateRoute path="/create">
            <SearchAppBar />
            <Container maxWidth="lg">
              <Box
                maxWidth="lg"
                mx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  columnGap: "4rem",
                  margin: "0 auto",
                  height: "100vh",
                }}
              >
                <Navigation />
                <RecipeForm />
              </Box>
            </Container>
          </PrivateRoute>

          <PrivateRoute path="/recipe/:id">
            <SearchAppBar />
            <Container maxWidth="lg">
              <Box
                maxWidth="lg"
                mx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  columnGap: "4rem",
                  margin: "0 auto",
                  height: "100vh",
                }}
              >
                <Navigation />
                <RecipeItem />
              </Box>
            </Container>
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <Container>
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
                <Box>
                  <User />
                </Box>
              </Box>
            </Container>
          </PrivateRoute>

          <PrivateRoute path="/users/:id">
            <Container>
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
                <Box>
                  <UserPublicProfile />
                </Box>
              </Box>
            </Container>
          </PrivateRoute>

          <Route path="/404" render={() => <h2>404 - Not Found</h2>} />

          <Route exact path="/">
            <Container maxWidth="lg">
              <ContainerLogin />
            </Container>
          </Route>

          <Redirect to="/404" />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
