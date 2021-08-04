import React from "react";
import { withRouter } from "react-router";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import locationBanner from "../../Assets/location-banner.png";
import host from "../../Assets/host.png";
import rate from "../../Assets/rate.png";
import LocationData from "./LocationData";

class Location extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header />

                <img id="location-banner" className="banner" src={locationBanner} alt="location-banner" />

                <div id="location-detail" className="width-margin-location">
                    <div id="location-information">
                        <h1 id="location-title">Cozy loft on the Canal Saint-Martin</h1>
                        <p>Paris, île-de-France</p>
                        <div id="tags">
                            <p className="tag">Cozy</p>
                            <p className="tag">Canal</p>
                            <p className="tag">Paris 10</p>
                        </div>
                    </div>

                    <div id="contact-detail">
                        <div id="location-contact">
                            <p id="name">Alexandre Dumas</p>
                            <img id="host" src={host} alt="host"/>
                        </div>
                        <div>
                            <img src={rate} alt="rate"/>
                        </div>
                    </div>
                </div>

                <div id="options" className="width-margin-location">
                    <LocationData name="Description" description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied). "/>
                    <LocationData name="Équipements" equipments={['Climatisation', 'Wi-Fi', 'Cuisine', 'Espace de travail', 'Fer à repasser', 'Sèche-cheveux', 'Cintres']} />
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(Location);