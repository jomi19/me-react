import React from 'react';
import axios from 'axios';

class RegisterUser extends React.Component {
    constructor(props) {
        super();
        this.state = {
            error: null,
            isAdded: false,
            api: props.user.api || false,
            text: "",
            kmom: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async addKmom() {
        axios
            .post(
                "https://api.joakimm.me/reports/", {
                    kmom: this.state.kmom,
                    text: this.state.text
                },
                {
                    headers:
            {
                "x-access-token": this.state.api
            }
                }
            )
            .then(respons => {
                console.log(respons);
            })
            .catch(error => {
                console.log("Add error", error);
            });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.api) {
            this.addKmom();
        }
    }



    render() {
        const error = this.state.error;

        if (error) {
            return <main>Error: {error}</main>;
        } else if (this.state.api) {
            return (
                <main className="main report">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label htmlFor="number">Kmom nummer:</label>
                        <input type="number" name="kmom" required min="1" max="10"
                            onChange={(event) => this.handleChange(event)}></input>
                        <label htmlFor="number">Kmom text:</label>
                        <textarea name="text" required
                            onChange={(event) => this.handleChange(event)}></textarea>
                        <input type="submit" className="submit green" value="Redigera" />
                    </form>

                </main>
            );
        } else {
            return (
                <main className="main report">
                    <h2>Logga in för att lägg till</h2>
                </main>
            );
        }
    }
}

export default RegisterUser;
