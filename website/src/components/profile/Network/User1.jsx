import React, { Component } from 'react';
import './User1.scss';
import Card from './Card.jsx';
import data from './data.jsx'

// class component
class User1 extends Component {

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

      <div className="User1">

        <span id="network_name"><strong>My Network</strong></span>
        <br />
        <button id="network_prev_button"
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        ><img src="https://img.icons8.com/ios/50/000000/left-squared--v1.png"/></button>
      <button id="network_next_button"
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length/3}
        ><img src="https://img.icons8.com/ios/50/000000/right-squared--v2.png"/></button>

        <div className="page">

            <div className={`cards-slider active-slide-${property.index}`}>
              <div className="cards-slider-wrapper" style={{
                  'transform':`translateX(-${property.index*(100/properties.length)*3}%)`
                }}>
                {
                  properties.map(property=><Card key={property._id} property={property} />)
                }

              </div>
            </div>

        </div>
      </div>
    );
  }
}

export default User1;
