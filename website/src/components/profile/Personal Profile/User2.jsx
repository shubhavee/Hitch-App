import React, { Component } from 'react';
import './User2.scss';
import Card2 from './Card2.jsx';
import data from './data.jsx'

class User2 extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties,property} = this.state;
    return (

      <div className="User2">
        <span id="profile_name"><strong>Adam Johnson</strong></span>
        <br />

        <button id="profile_prev_button"
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        ><img src="https://img.icons8.com/ios/50/000000/left-squared--v1.png"/></button>
      <button id="profile_next_button"
          onClick={() => this.nextProperty()}
          disabled={property.index === 3}
        ><img src="https://img.icons8.com/ios/50/000000/right-squared--v2.png"/></button>

        <div className="page">

            <div className={`cards-slider active-slide-${property.index}`}>
              <div className="cards-slider-wrapper" style={{
                  'transform':`translateX(-${property.index*(100/properties.length)}%)`
                }}>
                {
                  properties.map(property=><Card2 key={property._id} property={property} />)
                }

              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default User2;
