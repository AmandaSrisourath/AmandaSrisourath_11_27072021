import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import locationBanner from "../../Assets/location-banner.png";
import host from "../../Assets/host.png";
import rate from "../../Assets/rate.png";

class Location extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <img id="location-banner" src={locationBanner} />

                <div id="location-detail">
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
                            <img id="host" src={host} />
                        </div>
                        <div>
                            <img src={rate} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Location;