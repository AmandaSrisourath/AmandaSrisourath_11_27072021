import {Link} from "react-router-dom";

function About() {
    return (
        <div>
            <ul>
                <li>
                    <Link id={"home"} to="/">Accueil</Link>
                </li>
                <li>
                    <Link id={"about"} to="/about">A propos</Link>
                </li>
            </ul>
            <p>A propos</p>
        </div>
    );
}

export default About;