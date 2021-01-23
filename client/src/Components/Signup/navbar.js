import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav () {

    const location = useLocation();
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
         <Link to="/login" className={location.pathname==="/login"}> 
         KittenHelper
         </Link>
        </li>
        <li className="nav-item">
            <Link to="/login" className={location.pathname ==="/login"}>
                login
            </Link>
        </li>
      </ul>
    )
}

export default Nav;