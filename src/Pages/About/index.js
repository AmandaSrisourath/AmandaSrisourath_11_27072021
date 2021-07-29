import React from "react";
import Header from "../../Components/Header";
import Description from "./Description";
import Footer from "../../Components/Footer";

class About extends React.Component {
    render() {
        return (
            <div>
                <Header name="A propos" currentPage="about" />

                <div id="about-banner">
                </div>

                <Description name="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrements vérifiées par nos équipes." />
                <Description name ="Respect" description="La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation de voisinage entraînera une exclusion de notre plateforme." />
                <Description name="Service" description="Nos équipes se tinnes à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <Description name="Sécurité" description="La sécurité est la priorité de Kasa. aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissent une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />

                <Footer />

            </div>
        );
    }
}

export default About;