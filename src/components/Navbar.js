import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import LOGO from '../img/LOGO.png';
import user from '../context/user.js';
import CrearCampañas from './CrearCampañas';
import IniciarSesion from './IniciarSesion.js';
import { Link, useNavigate } from 'react-router-dom';



function Navbar({ ocultarHome, ocultarComponentes }) {
  const navigate = useNavigate(); 
  const [mostrarIniciarSesion, setMostrarIniciarSesion] = useState(false);
  const [mostrarCrearCampñas, setMostrarCrearCampñas] = useState(false);


  const handleLogoClick = () => {
    setMostrarIniciarSesion(false);
    setMostrarCrearCampñas(false);
    ocultarComponentes();
  };
  
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
    if (myContextUser.tipo === 'ONG') {
      MostrarloONGCrearCampaña();
    }
    if (myContextUser.tipo === 'Donante') {
      console.log('sos un donante');
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light borderNav">
      <div onClick={handleLogoClick}>
      <Link to="/" className="navbar-brand" onClick={ocultarHome}>
  <img className="imag" src={LOGO} alt="Logo" />
</Link>

      </div>
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
                activeClassName="active"
                to="/mapa"
                onClick={ocultarIniciarSesion}
              >
                Mapa
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeClassName="active"
                to="/campanas"
                onClick={CambiarLinkCampaña}
              >
                Campañas
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeClassName="active"
                to="/noticias"
                onClick={ocultarIniciarSesion}
              >
                Noticias
              </NavLink>
            </li>
            <li className="nav-item d-flex flex-wrap justify-content-evenly">
              <NavLink
                className="nav-link px-5 colorLetraNavBar"
                activeClassName="active"
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
              <NavLink className="nav-link px-5 colorLetraNavBar" activeClassName="active" to="/iniciosesion">
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
