import React from 'react';
import { Link,NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="nav-wrapper blue">
            <div className="container">
                <a className="brand-logo left-align">West Coture</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;