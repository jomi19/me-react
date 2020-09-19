import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';


const User = (props) =>{
    var user;
    var pass;
    if (props.user) {
        return (
        <main>Inloggad</main>
        )
    }

    return (
        <main>
            <form className="login" onSubmit={(e) => { e.preventDefault(); logIn(user, pass, props.setUser)}}>
                <label htmlFor="email">Epost:</label>
                <input type="email" name="email" placeholder="Email" onChange={(e) => {user = handleChange(e, props.setUser, user, pass)}}></input>
                <label htmlFor="password">Lösenord:</label>
                <input type="password" name="password" placeholder="Password" onChange={(e) => {pass = handleChange(e, props.setUser, user, pass)}}></input>
                <input type="submit" className="submit" value="Logga in"></input>
            </form>
            <NavLink to="../register">
               

            <input type="submit" className="submit registrer" value="Registrera och logga in" onClick={() => register(user, pass, props.setUser)} />
            </NavLink>
        </main>
    )
}


const register = (user, pass, setUser) => {
    axios
        .post(
            "http://localhost:1337/registEr/",{
                email: user,
                password: pass
            }
        )
        .then(respons => {
            logIn(user, pass, setUser);
        })
        .catch(error => {
            console.log("Login error", error)
        })


}

const logIn = (user, pass, setUser) => {
    axios
        .post(
            "http://localhost:1337/login/",{
                email: user,
                password: pass
            }
        )
        .then(respons => {
            console.log(respons)
            var test = document.getElementById("user");
            test.classList.add("online")
            setUser({
                api: respons.data.data.user.token
            })
        })
        .catch(error => {
            console.log("Login error", error)
        })
}

const handleChange = (e, setUser, user, pass) => {

    return e.target.value;

}

export default User;
