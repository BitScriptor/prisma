import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route,  } from "react-router-dom";

import Header from './components/pages/header/header';
import SlideImg from './components/generals/slideImg/slideImg';

import Index from './components/pages/index/index';
import Services from './components/pages/services/services';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>

        <Header/>

        <Route path="/" exact component={Index} />
        <Route path="/services/:service" component={Services} />
      </BrowserRouter>
    );
  }
}

export default App;
