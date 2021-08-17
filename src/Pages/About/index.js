import React from "react";
import Header from "../../Components/Header";
import Collapse from "./Collapse";
import Footer from "../../Components/Footer";

class About extends React.Component {
    render() {
        return (
            <div>
                <div id="container">
                    <Header name="A propos" currentPage="about" />

                    <div id="about-banner" className="banner">
                    </div>

                    <div id="collapse-container">
                        <Collapse name="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes." />
                        <Collapse name ="Respect" description="La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme." />
                        <Collapse name="Service" description="Nos équipes se tiennes à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                        <Collapse name="Sécurité" description="La sécurité est la priorité de Kasa. aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default About;