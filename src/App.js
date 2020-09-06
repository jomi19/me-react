import React from 'react';

import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Reports from './reports.js';
import Me from './me.js'
import Footer from './view/footer.js'
import Header from './view/header.js'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route component={Header}/>
        
        <Route exact path="/reports" component={Reports}/> 
        <Route exact path="/reports/:kmom" component={Reports}/> 
        <Route exact path="/" component={Me}/> 
        <Route component={Footer}/>

        
      </div>
    </Router>
  );
}

export default App;
