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
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
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
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <Link
            to="/contact"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li
          class="flex-sm-fill text-sm-center nav-link resume"
          href="../components/assets/images/jane-doe-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../components/assets/images/resume-color-80.png"
            alt="resume"
            height="28"
            width="28"
            class="resume"
          />
        </li>
        <li
          class="flex-sm-fill text-sm-center nav-link"
          href="https://github.com/jenjch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../components/assets/images/GitHub-icon.png"
            alt="GitHub"
            height="25"
            width="25"
            class="github"
          />
        </li>
        <li
          class="flex-sm-fill text-sm-center nav-link"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../components/assets/images/LI-In-Bug.png"
            alt="Linkedin"
            height="24"
            width="29"
            class="linkedin"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
