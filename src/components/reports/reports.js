import React from 'react';
import { NavLink } from 'react-router-dom';

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.kmom = props.kmom;
        this.state = {
            error: null,
            isLoaded: false,
            reload: false,
            online: props.user,
            report: []
        };
    }

    async getKmom(kmom) {
        const options = {
            method: "GET"
        };

        await fetch(`https://api.joakimm.me/reports/week/${kmom}`, options)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.errors) {
                        this.setState({
                            isLoaded: true,
                            reload: true,
                            error: result.errors
                        });
                    } else {
                        console.log(result.data);
                        this.setState({
                            isLoaded: true,
                            reload: true,
                            report: result.data
                        });
                    }
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("ererrs");
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    async UNSAFE_componentWillMount() {
        await this.getKmom(this.kmom);
    }

    UNSAFE_componentWillReceiveProps(props) {
        if (props.kmom !== this.state.report.kmom) {
            this.setState({reload: true});
            this.getKmom(props.kmom);
        }
    }

    shouldComponentUpdate() {
        if (this.state.reload  || !this.state.isLoaded) {
            this.setState({reload: false});
        }
        return true;
    }

    render() {
        const { error, isLoaded, report } = this.state;

        if (error) {
            return <main>Error: {error.title}</main>;
        } else if (!isLoaded) {
            return <main>Loading...</main>;
        }  else if (this.state.online) {
            return (
                <main className="main report">
                    <h2>Kmom{report.kmom}</h2>
                    {
                        report.text.split("</newrow>").map(sentence => <p>{sentence}</p>)
                    }
                    <NavLink to={{
                        pathname: "./../edit",
                        kmom: report.kmom
                    }}><input type="submit" className="submit green" value="Redigera" /></NavLink>
                    <p>GitHub</p>
                    <p><a href="https://github.com/jomi19/me-react">FrontEnd</a>  </p>
                    <a href="https://github.com/jomi19/me-api">Backend</a>
                </main>
            );
        } else {
            return (
                <main className="main report">
                    <h2>Kmom{report.kmom}</h2>
                    {
                        report.text.split("</newrow>").map((sentence) => <p>{sentence}</p>)
                    }
                    <p>GitHub</p>
                    <p><a href="https://github.com/jomi19/me-react">FrontEnd</a>  </p>
                    <a href="https://github.com/jomi19/me-api">Backend</a>
                </main>
            );
        }
    }
}

export default Reports;
