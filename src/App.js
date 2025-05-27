import React, { Component } from 'react'
import "./App.css";
import Greet from './Components/Greet'
import Registration from './Components/Registration'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isRegister: false,
      name:null,
      email:null,
      contact:null,
      password:null,
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;
    const password = e.target.password.value;
    this.setState({name,email,contact,password, isRegister: true})

  }

  render() {
    return (
      <div>
        {this.state.isRegister ? <Greet name={this.state.name} email={this.state.email} /> : <Registration submit={this.submitHandler} />}
      </div>
    )
  }
}

export default App
