import React, { Component } from 'react';
import User1 from './Network/User1.jsx';
import User2 from './Personal Profile/User2.jsx';
import './PandN.css';

class PandN extends Component {

  render() {
    return (
      <div className="Profile_page">
          <User2 />
          <User1 />
      </div>
    );
  }
}

export default PandN;
