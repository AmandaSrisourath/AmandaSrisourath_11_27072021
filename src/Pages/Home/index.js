import React from "react";
import Header from "../../Components/Header";
import LocationCard from "./LocationCard";
import data from "../../Assets/data.json";
import Footer from "../../Components/Footer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="container">
                    <Header name="Accueil" currentPage="home" />

                    <div id="home-banner" className="banner">
                        <p className="banner-title">Chez vous, partout et ailleurs</p>
                    </div>

                    <div id="main">
                        {data.map((location) => {
                            return (
                                <LocationCard key={location.id} id={location.id} title={location.title} cover={location.cover} />
                            )}
                        )}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Home;