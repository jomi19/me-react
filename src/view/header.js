

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from '../javascript.png';
import Reportmenu from './report-menu.js'

const Header = () => {
    console.log("test");
  
  return (
    <div className="header" data-header="">
        <div className="inner-header">
            <div className="logo"> <img src={logo} className="logo"></img></div>
            <nav class="nav-bar">
                <Link to="/">start</Link>
                <Link to="/reports">Test</Link>
                

            </nav>
            <Route exact path="/reports*" component={Reportmenu}/>
        </div>
    </div>)

};

export default Header;