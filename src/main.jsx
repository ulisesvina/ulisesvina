import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from "wouter";
import './css/index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/404';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/contact" component={ Contact } />
      <Route component={ NotFound } />
    </Switch>
  </React.StrictMode>,
  document.getElementById('root')
)
