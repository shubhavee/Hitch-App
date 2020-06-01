import React,{Component} from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom';

class Home extends Component{

  // changeBg=(e)=> {
  //     document.body.style.backgroundImage="url('network.png')";
  //
  // }

  changeColorBg=(e)=> {
      document.body.style.background="#D976DE";
    }

  render(){

    return(
      <div className="Home container">
          <p id="p_outer" onMouseOut={this.changeColorBg}><span>HITCH.</span> CONNECT,  ATTEND  AND  NETWORK
            <p id="p_inner">
              <NavLink id="loginButton" to='/signin' className='btn black lighten-0 z-depth-0'>Login</NavLink>
              <NavLink id="signupButton" to='/signup' className='btn black lighten-0 z-depth-0'>Sign Up</NavLink>
            </p>
          </p>
          <div id="triangle-bottomright" className="tri"></div>
        <div id="triangle-topleft" className="tri"></div>
        <div id="parallelogram-down"></div>
        <div id="parallelogram-up"></div>
      </div>
    )
  }

}

export default Home
