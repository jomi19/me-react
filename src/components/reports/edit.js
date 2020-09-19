import React from 'react';
import axios from 'axios';

class EditReport extends React.Component { 
  constructor(props) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      api: props.user.api || false,
      kmom: props.kmom,
      text: [],
      updated: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async getKmom(){
    axios.get(`http://localhost:1337/reports/week/${this.state.kmom}`)
    .then(respons => {
        this.setState({"text": respons.data.data.text})
        this.state.isLoaded = true;
    })
    .catch(error => {
        this.state.error = error;
        this.state.isLoaded = true;
    }
    );
  }

  async editKmom() {
    axios
      .put(
          "http://localhost:1337/reports/",{
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
        this.state.updated = true;
      }).catch(error => {
          this.state.error = error;
      })
}


  async addKmom(kmom) {
    var test;

    await axios
    .post(
        "http://localhost:1337/reports/",{
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
        test = respons;
    })
    .catch(error => {
        console.log("Add error", error);
    })
    return await test;
  }

  handleChange(e) {
      e.preventDefault();
      this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.editKmom();
  }

  async componentWillMount() {
    if(this.state.kmom) {
        await this.getKmom();
    }

  }


  render(props) {

    const { error } = this.state;
    if (error) {
      return <main>Error: {error}</main>;
    } else if(this.updated) {
        return <main>Updated</main>;
    } else if (this.state.api && this.state.text) {
      return (
        <main className="main report">
            <h1>Kmom{this.state.kmom}</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
              
              <label htmlFor="number">Kmom text:</label>
              <textarea name="text" required defaultValue={this.state.text} onChange={(event) => this.handleChange(event)}></textarea>
              <input type="submit" className="submit green" value="Redigera" />
          </form>
          
        </main>
      );
    } else {
      return (
        <main>
            Inte inloggad
        </main>
      );
    }
  }
}

export default EditReport;
