import React from "react";
import {Link} from "react-router-dom";

class LocationCard extends React.Component {
    render() {
        const {cover, title, id} = this.props;
        return (
            <Link to={`/Location/${id}`}>
                <div>
                    <div style={{"--img": `url(${cover})`}} className="location-card" alt="cover">
                        <p className="location-title">{title}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default LocationCard;