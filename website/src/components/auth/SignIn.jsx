import React, { Component } from 'react'
import './Styling.css'

class Class extends Component {

  state={
    email:'',
    password:'',
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <div className="container" id="sea_background">
        <form onSubmit={this.handleSubmit}>
        <h5 id="signin_signup" className="white-text text-darken-3"><strong>Sign In</strong></h5>
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
          <button className="btn purple lighten-1 z-depth-0">Login</button>
        </div>
        </form>
      </div>
    )
  }
}

export default Class
