import React from "react";
import {Link} from "react-router-dom";

class LocationCard extends React.Component {
    render() {
        const {cover, title, id} = this.props;
        return (
            <Link to={`/Location/${id}`}>
                <div>
                    <p className="location-title">{title}</p>
                    <img src={cover} className="location-card" alt="cover" />
                </div>
            </Link>
        )
    }
}

export default LocationCard;