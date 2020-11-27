import React from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import TopBar from "./TopBar";
import { photosStore } from "./store";
import CatPage from "./CatPage";
import history from './history'
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <TopBar />
        <Route
          exact
          path="/"
          component={props => (
            <HomePage {...props} photosStore={photosStore} />
          )}
        />
        <Route
          path="/upload"
          component={props => (
            <CatPage {...props} photosStore={photosStore} />
          )}
        />
      </Router>
    </div>
  );
}
export default App;