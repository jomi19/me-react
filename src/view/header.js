

import React, { useState} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from '../javascript.png';


const Header = () => {
    console.log("test");
  
  return (
    <div className="header" data-header="">
        <div className="inner-header">
            <div className="logo"> <img src={logo} className="logo" alt="Js"></img></div>
            <NavBar>
                <NavItem name="Start" href="/"/>
                <NavItem name="Kmom">
                    <DropdownMenu />
                </NavItem>
            </NavBar>
            <Route exact path="/reports*" component={kmoms}/>
        </div>
    </div>)

};



const DropdownMenu = () => {
    const DropdownItem = (props) => {
        return (
            <a href={props.href} className="menu-item">
                {props.children}
            </a>
        );
    };
    return (
        <div className="dropdown">
            <DropdownItem href="/week/1">Kmom01</DropdownItem>
            <DropdownItem href="/week/2">Kmom02</DropdownItem>
            <DropdownItem href="/week/3">Kmom03</DropdownItem>
        </div>
    );
}

const NavBar = (props) => {
    return (    
        <nav className="nav-bar">
            <ul className="navbar-nav"> {props.children}</ul>
        </nav>
    );
}

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
    <li className="nav-item">
        <a href={props.href} className="nav-text" onClick={() => setOpen(!open) }>{props.name}</a>
        {open && props.children}
    </li>

    );
}

const kmoms = () => {
  return (
    <nav class="nav-bar sub-menu">
      <Link to="/reports/week/1">Kmom1</Link>
      <Link to="/reports/week/2">Kmom2</Link>
    </nav>
  );
};

export default Header;