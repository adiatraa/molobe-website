import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <div className="navbarLogo">
                <img src="" alt=""></img>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <a href="/">Series</a>
                </li>
                <li>
                    <a href="/">Kids</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar