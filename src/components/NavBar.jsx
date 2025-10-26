import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../index.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 className="nav-title">AmbarNails</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categoria/esmaltes">Esmaltes</Link></li>
        <li><Link to="/categoria/accesorios">Accesorios</Link></li>
        <li><Link to="/categoria/herramientas">Herramientas</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
