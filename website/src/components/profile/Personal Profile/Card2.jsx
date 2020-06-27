import React from 'react';
import PropTypes from 'prop-types';

const Card2 = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;

    if(index%2==0){
      return (
          <div id={`card-${index}`} className="card2">
              <img src={picture} alt={city} />
          <div className="details">

                  <p className="phrase_profile">
                      Quirky<br />
                      Pro at chugging beer:)<br />
                      Swimmer
                  </p>
                  <br />
                  <br />
                  <p className="text_profile">(Student at MIT)</p>
                  <img id="verified" src="https://img.icons8.com/fluent/48/000000/verified-account.png"/>

              </div>
          </div>
      )
    }
    else{
      return (
          <div id={`card-${index}`} className="card2">
          <div className="prompt">

                  <p className="phrase_prompt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
              </div>
          </div>
      )
    }
}

Card2.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card2;
