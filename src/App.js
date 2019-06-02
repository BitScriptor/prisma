import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route,  } from "react-router-dom";

import Header from './components/pages/header/header';
import Footer from './components/pages/footer/footer';
import SlideImg from './components/generals/slideImg/slideImg';

import Index from './components/pages/index/index';
import Services from './components/pages/services/services';
import Contact from './components/pages/contact/contact';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>

        <Header/>

        <Route path="/" exact component={Index} />
        <Route path="/services/:service" component={Services} />
        <Route path="/contact" component={Contact} />

        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;
