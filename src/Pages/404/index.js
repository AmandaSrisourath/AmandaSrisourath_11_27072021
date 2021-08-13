import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../../Components/Header";

const PageNotFound = () => (
    <div>
        <div id="container">
            <Header />

            <div>
                <p id="error-number">404 </p>
                <p id="error-text">Oups! La page que vous demandez n'existe pas. </p>
            </div>
        </div>

        <Link id="error-link" to="/">
            Retourner sur la page d'accueil
        </Link>
    </div>
);

export default PageNotFound;