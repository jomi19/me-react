import React from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';


const User = (props) =>{
    var user;
    var pass;

    if (props.user) {
        return (
            <main><h1>Inloggad</h1></main>
        );
    }

    return (
        <main>
            <form className="login"
                onSubmit={(e) => { e.preventDefault(); logIn(user, pass, props.setUser);}}>
                <label htmlFor="email">Epost:</label>
                <input type="email" name="email" placeholder="Email"
                    onChange={(e) => {user = handleChange(e, props.setUser, user, pass);}}></input>
                <label htmlFor="password">Lösenord:</label>
                <input type="password" name="password" placeholder="Password"
                    onChange={(e) => {pass = handleChange(e, props.setUser, user, pass);}}></input>
                <input type="submit" className="submit" value="Logga in" id="login"></input>
            </form>
            <NavLink to="../register">


                <input type="submit" className="submit registrer" value="Registrera och logga in"
                    onClick={() => register(user, pass, props.setUser)} />
            </NavLink>
        </main>
    );
};


const register = (user, pass, setUser) => {
    axios
        .post(
            "https://api.joakimm.me/registEr/", {
                email: user,
                password: pass
            }
        )
        .then(() => {
            logIn(user, pass, setUser);
        })
        .catch(error => {
            console.log("Login error", error);
        });
};

const logIn = (user, pass, setUser) => {
    axios
        .post(
            "https://api.joakimm.me/login/", {
                email: user,
                password: pass
            }
        )
        .then(respons => {
            console.log(respons);
            var test = document.getElementById("user");

            test.classList.add("online");
            setUser({
                api: respons.data.data.user.token
            });
        })
        .catch(error => {
            console.log("Login error", error);
        });
};

const handleChange = (e) => {
    return e.target.value;
};

export default User;
