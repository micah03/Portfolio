import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const styelit = (e) => {
    e.target.style.backgroundColor = "rgb(52, 45, 37)";
    e.target.style.transform = "scale(1.05)";
    e.target.style.cursor = "pointer";
  };

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-logo">
          <NavLink exact to="/" className="nav-link" onClick={styelit}>
            Mayukha Mohan Thatikonda
          </NavLink>
        </li>
        <div className="nav-links">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={styelit}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={styelit}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              onClick={styelit}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <a href="/Resume.pdf" download="Gopi_Prasanth_Raju_Resume.pdf">
              Resume
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
