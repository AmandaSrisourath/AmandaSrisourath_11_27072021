import React from "react";
import AllRights from "../Assets/© 2020 Kasa. All rights reserved.png";
import logoFooter from "../Assets/logo-footer.png";

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <img id="logo-footer" src={logoFooter} alt="logo-footer" />
                <img id="logo-rights-footer" src={AllRights} alt="logo-rights-footer" />
            </div>
        );
    }
}

export default Footer;