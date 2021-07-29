import React from "react";
import Header from "../../Components/Header";
import Location from "./Location";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header name="Accueil" currentPage="home" />

                <div id="bannerBackground">
                    <p className="banner-title">Chez vous, partout et ailleurs</p>
                </div>

                <div id="main">
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                    <Location />
                </div>
            </div>
        );
    }
}

export default Home;