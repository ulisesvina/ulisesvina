import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from "wouter";
import './css/index.css';
import Home from './components/Home';
import NotFound from './components/404';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route component={ NotFound } />
    </Switch>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
)
