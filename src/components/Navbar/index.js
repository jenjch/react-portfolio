import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
      <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
          <ul className="navbar-nav">
            <li className="flex-sm-fill text-sm-center">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="flex-sm-fill text-sm-center">
              <Link
                to="/discover"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </Link>
            </li>
            <li className="flex-sm-fill text-sm-center">
              <Link
                to="/contact"
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact
              </Link>
            </li>
          </ul>
      </nav>
    );
  }

export default Navbar;