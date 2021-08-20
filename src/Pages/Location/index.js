import React from "react";
import { withRouter } from "react-router";
import Header from "../../Components/Header";
import Gallery from "./Gallery";
import data from "../../Assets/data.json";
import Rating from "./Rating";
import Collapse from "../About/Collapse";
import Footer from "../../Components/Footer";
import PageNotFound from "../404";

class Location extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        const locations = data;
        const foundLocation = locations.find(location => location.id === id);

        if (foundLocation) {
            this.setState( {
                foundLocation: foundLocation,
            })
        } else {
            this.setState( {
                error: true,
            })
        }
    }

    constructor(props) {
        super(props);
        this.state = {foundLocation: {tags: [], host:{}, equipments: [], pictures: [], rating:''}};
    }

    render() {
        const {foundLocation, error} = this.state;

        if (error) {
            return (
                <PageNotFound />
            )
        }

        return (
            <div>
                <div id="container">
                    <Header />

                    <Gallery pictures={foundLocation.pictures} />

                    <div id="location-detail">
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
                                <img id="host" src={foundLocation.host.picture} alt="host" />
                            </div>
                            <Rating rating={foundLocation.rating} />
                        </div>
                    </div>

                    <div id="location-collapse">
                        <div className="location-description">
                            <Collapse name="Description" description={foundLocation.description} />
                        </div>
                        <div className="location-description">
                            <Collapse name="Equipments" equipments={foundLocation.equipments} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(Location);