import React, {Component} from 'react';
import axios from "axios";
import App from "../App";


const User = (props) =>{

    // console.log(props.user)
    // console.log(props.setUser)
    //User loged in
    // if (user.logIn) {
    //     return (
    //     <main>In logad som {user.email}</main>
    //     )
    // }
    // User not loged in
    onSubmit

    return (
        <main>
            <form onSubmit={logIn(props.user, props.setUser)}>
                <input type="email" name="email" onChange={handleChange.bind()}></input>
                <input type="password" name="password" onChange={handleChange.bind()}></input>
                <input type="submit"></input>
            </form>
        </main>
    )
}

const logIn = (user, setUser) => {
    console.log(user)
    console.log(setUser)
    const {email, password, api} = user;
    axios
        .post(
            "http://localhost:1337/login/",{
                email: email,
                password: password
            }
        )
        .then(respons => {
            setUser({
                api: respons.data.data.user.token
            })
        })
        .catch(error => {
            console.log("Login error", error)
        })
}

const handleChange = (props, e) => {
    console.log(props);
    console.log(e)
}
// class user extends Component  {
//     constructor(props) {
//         super(props);
//         this.state = {
//             password: "",
//             email: "",
//             logIn: false};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         this.setState({[e.target.name]: e.target.value})
//         console.log(this.state)
//     }


//     }

//     handleSuccesfullLogin(data) {
        
//     }


//     async login() {
//         console.log(this.state.email)
//         const options = { 
//             method: "POST",
//             headers: {'content-Type': 'application/json'},
//             body: JSON.stringify({
//                 email: this.state.email,
//                 password: this.state.password
//             })
//           }
//         fetch(``, options)
//         .then(res => res.json())
//         .then(
//           (result) => {
//               console.log(result)
//               if (result.errors) {
//                 this.setState({
//                   error: result.errors
//                 })
//               } else {
//                 this.setState({
//                 logIn: true,
//                 api: result.data.user.token
//               });
//               console.log(result.data.user.token)
//             }
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//         return Promise.resolve(1)
        
//     }



// }

export default User;