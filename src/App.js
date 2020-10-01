import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reports from './components/reports/reports.js';
import AddReport from './components/reports/add.js';
import Me from './me.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import User from './components/user/user';
import EditReport from './components/reports/edit.js';
import Chat from "./components/chat/main.js";




const App = () => {
    const [menuState, setMenu] = useState(false);
    const [logInState, SetLogIn] = useState(false);
    const closeMenu = () => {
        if (menuState) {
            setMenu(!menuState);
        }
    };

    return (

        <Router>
            <div className="App" onClick= {(event) => closeMenu(event)}>
                <Header setMenu={(value) => setMenu(value)} state={menuState} user={logInState}>
                </Header>
                <Route exact path="/login" render={() =>
                    <User setUser= {(value) => SetLogIn(value)} user={logInState} />}/>
                <Route exact path="/reports/week/:kmom" render={(props) =>
                    <Reports kmom={props.match.params.kmom} user={logInState}/>} />
                <Route exact path="/reports/add" render={() =>
                    <AddReport user={logInState}/>} />
                <Route exact path="/reports/edit" render={(props) =>
                    <EditReport user={logInState} kmom={props.location.kmom}/>} />
                <Route exact path="/" component={Me}  />
                <Route exact path="/chat" component={Chat}  />
                <Footer></Footer>
            </div>
        </Router>
    );
};


export default App;
