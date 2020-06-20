import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Directory}></Route>
      </div>
    </Router>
  );
}

export default App;
