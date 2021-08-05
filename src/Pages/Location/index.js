import React from "react";
import { withRouter } from "react-router";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import locationBanner from "../../Assets/location-banner.png";
import rate from "../../Assets/rate.png";
import LocationData from "./LocationData";
import data from "../../Assets/data.json";

class Location extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        const locations = data;
        const foundLocation = locations.find(location => location.id === id);
        this.setState( {
            foundLocation: foundLocation,
        })
    }

    constructor(props) {
        super(props);
        this.state = {foundLocation: {tags: [], host:{}, equipments: []}};
    }

    render() {
        const {foundLocation} = this.state;
        return (
            <div>
                <Header />

                <img id="location-banner" className="banner" src={locationBanner} alt="location-banner" />

                <div id="location-detail" className="width-margin-location">
                    <div id="location-information">
                        <h1 id="location-title">{foundLocation.title}</h1>
                        <p>{foundLocation.location}</p>
                        <div id="tags">
                            {foundLocation.tags.map((tag) =>
                                <p className="tag" key={tag}>{tag}</p>
                            )}
                        </div>
                    </div>

                    <div id="contact-detail">
                        <div id="location-contact">
                            <p id="name">{foundLocation.host.name}</p>
                            <img id="host" src={foundLocation.host.picture} alt="host"/>
                        </div>
                        <div>
                            <img src={rate} alt="rate"/>
                        </div>
                    </div>
                </div>

                <div id="options" className="width-margin-location">
                    <LocationData
                        name="Description"
                        description={foundLocation.description}
                    />

                    <LocationData
                        name="Équipements"
                        equipments={foundLocation.equipments}
                    />
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(Location);