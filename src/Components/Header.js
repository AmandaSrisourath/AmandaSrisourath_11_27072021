import React from "react";
import {Link} from "react-router-dom";
import logo from "../Assets/logo.png";

class Header extends React.Component {
    getLinkClass(linkName) {
        const {currentPage} = this.props;
        if(currentPage === linkName) {
            return "underline";
        }
        return null;
    }

    render() {
        return (
            <div id={"header"}>
                <img src={logo} alt="logo-kasa" />

                <ul>
                    <li>
                        <Link id="home" className={this.getLinkClass("home")} to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link id="about" className={this.getLinkClass("about")} to="/about">A propos</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;