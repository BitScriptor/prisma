import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/pages/header/header';
import Index from './components/pages/index/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>

          <Route path="" exact component={Index} />
          <Route path="/about" />
          <Route path="/users" />
        </div>
      </Router>
    );
  }
}

export default App;
