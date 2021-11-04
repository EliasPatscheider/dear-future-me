import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {

    return (
        <nav class = "navbar">
            <Link to="/">
                <h3>Logo</h3>
            </Link>
            <ul class="navlinks">
                <Link to="/about">
                    <li>
                        About
                    </li>
                </Link>
                <Link to="/vault">
                    <li>
                        Vault
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
