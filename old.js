import React, {Component} from 'react';
import user from "./models/user";
import './App.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Reports from './reports.js';
import Me from './me.js'
import Footer from './view/footer.js'
import Header from './view/header.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      logedIn: false,
      email: "",
      api: ""
    }
  }

  handleLogin(data) {
    console.log(data.type);
    this.setState({
      logedIn: true,
      email: data.email,
      api: data.api
    })
  }
  render () {
    console.log(user.state)
    return (
      <Router>
        <div className="App">
          <Header></Header>
          
          <Route exact path="/login" component={user}  /> 
          <Route exact path="/reports" component={Reports}/> 
          <Route exact path="/reports/week/:kmom" component={Reports}/> 
          <Route exact path="/" component={Me}/> 
          <Footer></Footer>
  
          
        </div>
      </Router>
    );
  }

}

export default App;
