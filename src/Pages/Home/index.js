import {Link} from "react-router-dom";

function Home() {
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
            <p>Accueil</p>
        </div>
    );
}

export default Home;