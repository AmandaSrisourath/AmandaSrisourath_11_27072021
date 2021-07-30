import React from "react";
import {Link} from "react-router-dom";

class LocationCard extends React.Component {
    render() {
        return (
            <Link className="location-card" to="/Location">
                <p className="location-title">Titre de la location</p>
            </Link>
    )
    }
}

export default LocationCard;