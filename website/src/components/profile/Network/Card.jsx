import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (

        <div id={`card-${index}`} className="card">
            <img src={require("./profile_photo_2.jpg")} alt={city} />

            <input id="btn1" type="button" class="mybuttonoverlap btn btn-info" value="Call"/>
            <input id="btn2" type="button" class="mybutton2overlap btn btn-info" value="Profile"/>
        <div className="details">

                <p className="phrase_network">
                    Blissful<br />
                    Dancer:)<br />
                    Adventurous
                </p>
                <br />
                <br />
                <p className="text_network">
                Naomi Watts<br />
                (Student at KMC)
                </p>
                <img id="verified" src="https://img.icons8.com/fluent/48/000000/verified-account.png"/>

            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
