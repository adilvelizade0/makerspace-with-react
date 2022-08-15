import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./styles/Footer.style";

export const Footer = () => {
  return (
    <FooterContainer className="container d-flex justify-content-between py-3">
      <div className="socials">
        <a className="mx-2" href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a className="mx-2" href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="mx-2" href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="mx-2" href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="links">
        <Link to="/About" className="mx-2 text-decoration-none">
          About
        </Link>
        <span>-</span>
        <Link to="/About" className="mx-2 text-decoration-none">
          Contact
        </Link>
        <span>-</span>
        <Link to="/About" className="mx-2 text-decoration-none">
          Gallery
        </Link>
      </div>
    </FooterContainer>
  );
};
