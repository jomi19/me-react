

import React from 'react';

import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';
import logo from '../javascript.png';
import  {ReactComponent as IconReport} from '../style/icons/file-alt.svg';
import {ReactComponent as IconHome} from '../style/icons/home.svg';
import {ReactComponent as UserIcon} from "../style/icons/user.svg"


const Header = (props) => {
  return (
    <div className="header" data-header="" >
        <NavLink to="/login/" ><UserIcon className="user" id="user" /></NavLink>
        <div className="inner-header">
            <div className="logo"> <img src={logo} className="logo" alt="Js"></img></div>
            <NavBar>
                <NavItem name="Start" href="/" icon={<IconHome />}/>
                <NavItem name="Kmom" setState={props.setMenu} state={props.state} icon={<IconReport className="test dont"/>}>
                    <DropdownMenu test={props}/>
                </NavItem>
            </NavBar>
 
        </div>
    </div>)

};

const NavBar = (props) => {
    return (    
        <nav className="nav-bar">
            <ul className="navbar-nav"> {props.children}</ul>
        </nav>
    );
}

const NavItem = (props) => {
    const setOpen = props.setState;
    const open = props.state
    
    if (props.href && props.setState) {
        return (
            <li className="nav-item">
            <NavLink to={props.href} className="nav-button" onClick={() => setOpen(!open) }><img src={props.icon} alt="icon" /></NavLink>
            {open && props.children}
        </li>
        
            );
    } else if (props.href){
        return (
            <li className="nav-item">
            <NavLink to={props.href} className="nav-button" >{props.icon}</NavLink>
            {open && props.children}
        </li>
        
            );
    }
    return (
        <li className="nav-item">
        <a to={props.href} className="nav-button dont" onClick={() => setOpen(!open) }>{props.icon}</a>
        {open && props.children}
    </li>
    )
   
}

const DropdownMenu = (props) => {
    const DropdownItem = (props) => {
        return (
            <NavLink to={props.href} className="menu-item">
                {props.children}
            </NavLink>
        );
    };
    if (props.test.user) {
        return (
            <div className="dropdown">
                <DropdownItem href="/reports/week/1">Kmom01</DropdownItem>
                <DropdownItem href="/reports/week/2">Kmom02</DropdownItem>
                <DropdownItem href="/reports/week/3">Kmom03</DropdownItem>
                <DropdownItem href="/reports/add">Lägg till</DropdownItem>
            </div>
        )

    }
    return (
        <div className="dropdown">
            <DropdownItem href="/reports/week/1">Kmom01</DropdownItem>
            <DropdownItem href="/reports/week/2">Kmom02</DropdownItem>
            <DropdownItem href="/reports/week/3">Kmom03</DropdownItem>
        </div>
    );
}

export default Header;
