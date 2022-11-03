import './App.css'
import logo from './logo.svg';
import Buttons from './Buttons';

import Footer from './Footer';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="App">
  
        <div>
          <Switch>
            <Route exact path="/">
              <Buttons />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
