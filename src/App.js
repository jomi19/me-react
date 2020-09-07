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
        <Header></Header>
        
        <Route exact path="/reports" component={Reports}/> 
        <Route exact path="/reports/week/:kmom" component={Reports}/> 
        <Route exact path="/" component={Me}/> 
        <Footer></Footer>

        
      </div>
    </Router>
  );
}

export default App;
