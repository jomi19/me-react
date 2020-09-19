import React from 'react';

class MyComponent extends React.Component { 
  
  constructor(props) {
    super(props);
    this.kmom = props.kmom
    this.state = {
      error: null,
      isLoaded: false,
      report: []
    };
  }
  componentDidMount() {
    const options = { 
      method: "GET"
    }
    fetch(`http://localhost:1337/reports/week/${this.kmom}`, options)
      .then(res => res.json())
      .then(
        (result) => {
            if (result.errors) {
              this.setState({
                isLoaded: true,
                error: result.errors
              })
            } else {
              this.setState({
              isLoaded: true,
              report: result.data
            });
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("ererrs")
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, report } = this.state;
    console.log(this.state)
    if (error) {
      return <main>Error: {error.title}</main>;
    } else if (!isLoaded) {
      return <main>Loading...</main>;
    }  else {
      return (
        <main className="main report">
          <h2>{report.kmom}</h2>
          {report.text}
        </main>
      );
    }
  }
}

const Reports = ({ match }) => {
  var kmom = match.params.kmom;

  console.log(kmom);
  return (
    <MyComponent kmom={kmom}></MyComponent>

  );
};

export default Reports;