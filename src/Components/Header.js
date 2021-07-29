import React from "react";
import {Link} from "react-router-dom";
import logo from "../Assets/logo.png";

class Header extends React.Component {
    render() {
        const {currentPage} = this.props;
        // const {name} = this.props;
        return (
            <div id={"header"}>
                <img src={logo} />

                <ul>
                    <li>
                        <Link id={"home"} className={ currentPage === "home" && "underline" } to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link id={"about"} className={ currentPage === "about" && "underline" } to="/about">A propos</Link>
                    </li>
                </ul>

                {/*<p>{ name }</p>*/}
            </div>
        );
    }
}

export default Header;