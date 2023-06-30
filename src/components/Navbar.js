import React, { useState,useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import LOGO from '../img/LOGO.png';
import IniciarSesion from './IniciarSesion';
import user from '../context/user.js';
import navBarLink from '../context/navBarLink.js';
import CrearCampañas from './CrearCampañas';

function Navbar() {
  const [mostrarIniciarSesion, setMostrarIniciarSesion] = useState(true); // Inicialmente mostrarIniciarSesion se establece en true

  const ocultarIniciarSesion = () => {
    setMostrarIniciarSesion(false); // Cambia el estado a false para ocultar el componente IniciarSesion
  };

  const myContextavBarLink = useContext(navBarLink);
  const myContextUser = useContext(user);

  const CambiarLinkCmpaña=() => {
  
    ocultarIniciarSesion();
    if (myContextUser.tipo === "ONG") {
      myContextavBarLink.setCampañas(<CrearCampañas/>);
    }
   

  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light borderNav">
        <Link className="navbar-brand" to="/">
          <img className="imag" src={LOGO} alt="Logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto d-flex flex-wrap justify-content-evenl">
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeclassname="active"
                to="/mapa"
                onClick={ocultarIniciarSesion} // Oculta el componente IniciarSesion al hacer clic en el enlace
              >
                Mapa
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeclassname="active"
                to="/campanas"
                onClick={CambiarLinkCmpaña()} // Oculta el componente IniciarSesion al hacer clic en el enlace
              >
                Campañas
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeclassname="active"
                to="/noticias"
                onClick={CambiarLinkCmpaña} // Oculta el componente IniciarSesion al hacer clic en el enlace
              >
                Noticias
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeclassname="active"
                to="/misdonaciones"
                onClick={ocultarIniciarSesion} // Oculta el componente IniciarSesion al hacer clic en el enlace
              >
                Mis Donaciones
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <a className="icon" onClick={() => setMostrarIniciarSesion(true)}>
              <NavLink className="nav-link px-5 colorLetraNavBar" activeclassname="active" to="/iniciosesion">
                <FaUserCircle className="icon" />
              </NavLink>
            </a>
          </span>
        </div>
      </nav>
      {mostrarIniciarSesion && <IniciarSesion setMostrarIniciarSesion={setMostrarIniciarSesion} />}

    </>
  );
}

export default Navbar;
