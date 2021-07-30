import React from "react";
import Header from "../../Components/Header";
import LocationCard from "./LocationCard";
import Footer from "../../Components/Footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header name="Accueil" currentPage="home" />

                <div id="home-banner">
                    <p className="banner-title">Chez vous, partout et ailleurs</p>
                </div>

                <div id="main">
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                    <LocationCard />
                </div>

                <Footer />
            </div>
        );
    }
}

export default Home;