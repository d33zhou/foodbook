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
  const [fullData, setFullData] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [cuisine, setCuisine] = useState("");

 

  const handleDifficulty = (event) => {
    setDifficulty(event.target.value);

    const difficultyResults = [
      ...fullData.filter((recipe) => {
        return (
          recipe.difficulty === event.target.value && recipe.cuisine === (cuisine || "thai")
        );
      }),
    ];

    setResults(difficultyResults);
  };

  const handleCuisine = (event) => {
    setCuisine(event.target.value);
    const cuisineResults = [
      ...fullData.filter((recipe) => {
        return (
          recipe.cuisine === event.target.value && recipe.difficulty === (difficulty || "easy")
        );
      }),
    ];
    
    setResults(cuisineResults);
  };

  useEffect(() => {
    const testURL = `http://localhost:3001/api/recipes`;
    axios.get(testURL).then((response) => {
      setResults(response.data);
      setFullData(response.data);
     
    });
  }, []);

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
                <Navigation />
                <Box>
                  <h2>Items {results.length}</h2>
                  <RecipeList results={results} />
                </Box>
                <RecipeFilters
                  difficulty={difficulty}
                  cuisine={cuisine}
                  handleDifficulty={handleDifficulty}
                  handleCuisine={handleCuisine}
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
