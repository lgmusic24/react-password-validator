import React, { Component } from 'react';

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      passwordConfirm:"",
      valid: true,
    }
  }
}

  handleEmail (e) {
    this.setState({
    email: e.target.value
    })
}


   handlePassword (e) {
    this.setState({
      password: e.target.value

    })
  }


  handlePasswordConfirm (e){
    this.setState({
      passwordConfirm: e.target.value

    })
  }


  handleSubmit (e) {
    e.preventDefault({
      this.checkValidity
    })
  }

  checkValidity () {
    if (this.state.password === this.state.passwordConfirm)
      this.state.password ({valid:true})
    else {
      this.state.password ({valid:false})
    }



  render() {
    let valid = !this.state.valid ? "Valid!" : "Passwords do not Match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
      <input onchange={(e) => this.handleEmail(e)} type="text" placeholder="email" />
      <input onchange={(e) => this.handlePassword(e)} type="password" placeholder="password" />
      <input onchange={(e) => this.handlePasswordConfirm(e)} type="password" placeholder="confirm password" />
      <input onchange={(e) => this.handleSubmit(e)} type="submit" value="Submit" />
   </div>
    );
  }
}

export default Validator;
