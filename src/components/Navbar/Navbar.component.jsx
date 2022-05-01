import React from "react";
import { Link } from "react-router-dom";
import { NavbarContainer } from "./styles/Navbar.style";

export const Navbar = () => {
  return (
    <NavbarContainer className="navbar navbar-expand-lg bg-white navbar-light sticky-top">
      <div className="lx-background position-absolute">
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
        <div className="lx-background-item"></div>
      </div>
      <div className="container">
        <Link to="/" className="navbar-brand fs-4">
          Maker<span>Space</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars text-black fs-4"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Activities
              </div>
              <ul
                className="dropdown-menu shadow"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <div className="dropdown-item">Action</div>
                </li>
                <li>
                  <div className="dropdown-item">Another action</div>
                </li>
                <li>
                  <div className="dropdown-item">Something else here</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
};
