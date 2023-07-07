
import IniciarSesion from './IniciarSesion';
import React, { useState, useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import LOGO from '../img/LOGO.png';
import user from '../context/user.js';
import CrearCampañas from './CrearCampañas';

function Navbar({ ocultarHome }) {
  const [mostrarIniciarSesion, setMostrarIniciarSesion] = useState(false);
  const [mostrarCrearCampñas, setMostrarCrearCampñas] = useState(false);
  
  const myContextUser = useContext(user);

  const ocultarIniciarSesion = () => {
    setMostrarIniciarSesion(false);
    ocultarHome(); // Llamar a la función ocultarHome cuando se oculte IniciarSesion
  };

  const MostrarloONGCrearCampaña = () => {
    setMostrarCrearCampñas(true);
    setMostrarIniciarSesion(false);
    ocultarHome(); // Llamar a la función ocultarHome cuando se muestre CrearCampañas
  };

  const CambiarLinkCampaña = () => {
    if (myContextUser.tipo === "ONG") {
      MostrarloONGCrearCampaña();
    }
    if (myContextUser.tipo === "Donante") {
      console.log("sos un donante");
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
                onClick={ocultarIniciarSesion}
              >
                Mapa
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeclassname="active"
                to="/campanas"
                onClick={CambiarLinkCampaña}
              >
                Campañas
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeclassname="active"
                to="/noticias"
                onClick={ocultarIniciarSesion}
              >
                Noticias
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeclassname="active"
                to="/misdonaciones"
                onClick={ocultarIniciarSesion}
              >
                Mis Donaciones
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text">
            <a
              className="icon"
              onClick={() => {
                setMostrarIniciarSesion(true);
                setMostrarCrearCampñas(false);
                ocultarHome(); // Llamar a la función ocultarHome cuando se muestre IniciarSesion
              }}
            >
              <NavLink className="nav-link px-5 colorLetraNavBar" activeclassname="active" to="/iniciosesion">
                <FaUserCircle className="icon" />
              </NavLink>
            </a>
          </span>
        </div>
      </nav>
      {mostrarIniciarSesion && <IniciarSesion setMostrarIniciarSesion={setMostrarIniciarSesion} />}
      {mostrarCrearCampñas && <CrearCampañas setMostrarCrearCampñas={setMostrarCrearCampñas} />}
    </>
  );
}

export default Navbar;

