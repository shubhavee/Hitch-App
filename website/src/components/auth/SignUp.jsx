import React, { Component } from 'react';
import axios from 'axios';
import './Styling.css'

class SignUp extends Component {

  state={
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    loginErrors:'',
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit=(e)=>{

    const {email,password,firstName,lastName}=this.state;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://139.59.25.107:3900/api/users/";

    // axios
    //   .post(
    //     (proxyurl+url),
    //     {
    //       user:{
    //         email:email,
    //         password: password,
    //         firstName: firstName,
    //         lastName: lastName
    //       }
    //     },
    //     {withCredentials: true}
    //   )
    //   .then(response=>{
    //     console.log("res from login", response);
    //   })
    //   .catch(error=>{
    //     console.log("registration error", error);
    //   });

    // const res = axios.get(`https://cors-anywhere.herokuapp.com/http://139.59.25.107:3900/api/users/5ef0b2c92f34ea2fea570d1f`);
    // console.log(res)
      e.preventDefault();
  }

  render () {
    return (
      <div className="container" id="sea_background">
        <form onSubmit={this.handleSubmit}>
        <h5 id="signin_signup" className="white-text text-darken-3"><strong>Sign Up</strong></h5>
        <h5><span id="colorful_text"></span></h5>
        <br />
        <br />
      <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={this.handleChange} />
        </div>
        <div className="input-field">
          <button className="btn purple lighten-1 z-depth-0">Sign Up</button>
        </div>
        </form>
      </div>
    )
  }
}

export default SignUp
