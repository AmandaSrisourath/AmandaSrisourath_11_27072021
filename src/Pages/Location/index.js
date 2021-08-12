import React from "react";
import { withRouter } from "react-router";
import Header from "../../Components/Header";
import Gallery from "./Gallery";
import rate from "../../Assets/rate.png";
import LocationData from "./LocationData";
import data from "../../Assets/data.json";
import Footer from "../../Components/Footer";

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
        this.state = {foundLocation: {tags: [], host:{}, equipments: [], pictures: []}};
    }

    render() {
        const {foundLocation} = this.state;
        return (
            <div>
                <Header />

                <Gallery pictures={foundLocation.pictures} />

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
                        <div id="rate">
                            <img className="rate" src={rate} alt="rate"/>
                        </div>
                    </div>
                </div>

                <div id="options" className="width-margin-location">
                    <LocationData name="Description" description={foundLocation.description} />
                    <LocationData name="Équipements" equipments={foundLocation.equipments} />
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(Location);