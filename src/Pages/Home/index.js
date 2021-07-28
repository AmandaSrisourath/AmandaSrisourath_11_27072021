import React from "react";
import Header from "../../Components/Header";
import homeBanner from "../../Assets/home-banner.png";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header name="Accueil" currentPage="home" />

                <img id="banner" src={homeBanner} />

                <div id="main">
                    <div className="red-block">
                    </div>

                    <div className="red-block">
                    </div>

                    <div className="red-block">
                    </div>

                    <div className="red-block">
                    </div>

                    <div className="red-block">
                    </div>

                    <div className="red-block">
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;