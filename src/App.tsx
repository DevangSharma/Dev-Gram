import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./Views/HomePage";
import { store } from "./store";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
