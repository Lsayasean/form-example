import React, { Component } from "react";

class MainForm extends Component {
    constructor(props){
        super(props)

        this.state= {
            name: '',
            logged: ``
        }
    }

    login = (e) => {
        e.preventDefault();
        this.setState({logged: `welcome ${this.state.name}`})
    }
  render() {
      console.log(this.state.name)
    return (
      <div>
        <h1>Welcome to Form</h1>
        <form onSubmit={(e) => this.login(e)}>
            <div>
                
            </div>
          <label>Name: </label>
          <input 
          placeholder='name'
          onChange={(e) => this.setState({name: e.target.value})}
          />
        </form>
        <div style={{
            marginTop: '100px'
        }}>
            {this.state.logged}
        </div>
      </div>
    );
  }
}

export default MainForm;
