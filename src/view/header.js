

import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from '../javascript.png';

const Header = () => {
    console.log("test");
  
  return (
    <div className="header" data-header="">
        <div className="inner-header">
            <div className="logo"> <img src={logo} className="logo" alt="Js"></img></div>
            <nav class="nav-bar">
                <Link to="/">start</Link>
                <Link to="/reports">Kmom</Link>
            </nav>
            <Route exact path="/reports*" component={kmoms}/>
        </div>
    </div>)

};

const kmoms = () => {
  return (
    <nav class="nav-bar sub-menu">
      <Link to="/reports/week/1">Kmom1</Link>
      <Link to="/reports/week/2">Kmom2</Link>
    </nav>
  );
};

export default Header;