import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';



const Navbar=()=>{
  return(
    <nav className="navbar navbar-fixed-top navbar-expand-sm nav-wrapper grey gre darken-3">
      <div className="container">
        <Link to="/" className="brand-logo"><strong>Hitch</strong></Link>
        <SignedInLinks />
        
      </div>
    </nav>
  )
}

export default Navbar
