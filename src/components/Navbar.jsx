import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/logoabc.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="topbar">
        Venta mayorista de uniformes para empresas y colegios
      </div>

      {/* NAVBAR PRINCIPAL */}
      <header className="navbar">
        <div className="container inner">
          {/* Marca / Logo */}
          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
          >
            <img src={logo} alt="ABC Uniformes" className="logo" />
            <span>ABC Uniformes</span>
          </Link>

          {/* Links */}
          <nav className={open ? "open" : ""}>
            <NavLink to="/" end>
              Inicio
            </NavLink>
            <NavLink to="/colegios">Colegios</NavLink>
            <NavLink to="/clubes">Clubes</NavLink>
            <NavLink to="/empresas">Empresas</NavLink>
            <NavLink to="/comercios">Comercios</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </nav>

          {/* Botón hamburguesa (mobile) */}
          <button
            className="burger"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}