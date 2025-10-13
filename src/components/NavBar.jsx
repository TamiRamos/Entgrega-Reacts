import React from "react";
import CartWidget from "./CartWidget";
import "../index.css"; // opcional para estilos

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>AmbarNails</h2> {/* Si quieres, puedes usar solo texto */}
      </div>

      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
