import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import LOGO from '../img/LOGO.png';
/*https://react-icons.github.io/react-icons/icons?name=fa*/

function NavBar() {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img className="imag" src={LOGO}/>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Mapa <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Campañas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Noticias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mis Donaciones</a>
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