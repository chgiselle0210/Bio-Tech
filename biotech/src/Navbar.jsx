// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Bio-Tech</h1>
        <ul className="navbar-list">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/data-upload">Cargar Datos</Link></li>
          <li><Link to="/collaboration">Colaboración</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
