import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import LOGO from '../img/LOGO.png';
/*https://react-icons.github.io/react-icons/icons?name=fa*/

function NavBar() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light borderNav">
    <img className="imag" src={LOGO}/>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto d-flex flex-wrap justify-content-evenl">
        <li className="nav-item d-flex flex-wrap justify-content-evenly ">
        <a className="boton nav-link px-5 colorLetraNavBar " href="#">Mapa</a>
        </li>
        <li className="nav-item d-flex flex-wrap justify-content-evenly">
          <a className="boton nav-link px-5 colorLetraNavBar" href="#">Campañas</a>
        </li>
        <li className="nav-item d-flex flex-wrap justify-content-evenly">
          <a className="boton nav-link px-5 colorLetraNavBar" href="#">Noticias</a>
        </li>
        <li className="nav-item d-flex flex-wrap justify-content-evenly">
          <a className="boton nav-link px-5 colorLetraNavBar" href="#">Mis Donaciones</a>
        </li>
      </ul>
      <span className="navbar-text">
      <FaUserCircle className="icon"/>  
      </span>
    </div>
  </nav>
  </>
  )
}

export default NavBar;