import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


const Navbar = ()=>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand justin" to="/">
    Justins React Site 
    </Link>
    <div>
        <ul className="navbar-nav">
        <li className={window.location.path === "/" ||
                       window.location.path === "/home"
                       ? "nav-item active"
                       : "nav-item" }>
        <Link to="/" className="nav-link">
        Home
        </Link>
                       </li>
        
        <li className={window.location.path === "/swipe"
                       ? "nav-item active"
                       : "nav-item" }>
        <Link to='/swipe' className="nav-link"> Swipe </Link>
                       </li>
        
        <li className={window.location.path === "/reviews"
                       ? "nav-item active"
                       : "nav-item"}>
        <Link to="/reviews" className="nav-link"> Reviews </Link>
                       </li>
            
            </ul>
        </div>
    </nav>
)

export default Navbar