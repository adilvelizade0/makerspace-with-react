import styled from "styled-components";

const NavbarContainer = styled.nav`
  .navbar-toggler {
    border: 0 !important;
  }

  .navbar-brand {
    color: #242424;
    font-weight: 500;
    font-family: "Righteous", cursive;
    text-transform: uppercase;

    span {
      color: #001d6e;
    }
  }

  .dropdown-menu {
    border: 0;

    .dropdown-item:hover {
      cursor: pointer;
      background-color: #001d6e !important;
      color: #fff !important;
    }
  }

  .nav-item {
    color: #848484;
    transition: all ease 0.3s;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 0.875rem;

    .active {
      color: #242424 !important;
      transition: all ease 0.3s;
      font-weight: 600;
    }
  }
`;

export { NavbarContainer };
