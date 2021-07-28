import React from "react";
import Header from "../../Components/Header";
import aboutBanner from "../../Assets/about-banner.png";

class About extends React.Component {
    render() {
        return (
            <div>
                <Header name="A propos" currentPage="about"/>

                <img id="banner" src={aboutBanner} />

            </div>
        );
    }
}

export default About;