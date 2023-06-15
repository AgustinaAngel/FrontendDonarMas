import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import LOGO from '../img/LOGO.png';
import Navbar from './Navbar';
/*https://react-icons.github.io/react-icons/icons?name=fa*/

function IniciarSesion() {

  return (
    <>
    <div class="pb-5"></div>
    <div class="pb-5"></div>
    <div class="pb-5"></div>
    <center>
  <div className="card text-center cardIni">
  <div className="card-body">
    <h5 className="card-title tituloCard pb-5">Iniciar Sesión</h5>

    <form>
        
          <input type="text" name="mail" className="u-full-width medidainput" placeholder="Mail" autoComplete="off" />
          <input type="text" name="contraseña" className="u-full-width medidainput" placeholder="Contraseña" autoComplete="off"/>
          <a className="boton nav-link px-5 colorLetraIni pb-5" href="#">¿Has olvidado tu contraseña?</a>
        <button type="submit" className="botonVioleta">Iniciar Sesión</button>
      </form>

      
  </div>
 
</div>
<div className="text-muted">
  <a className="boton nav-link px-5 colorLetraIni" href="#">¿No tenés un perfil?¡Registrate!</a>
  </div>
</center>
  </>
  )
}

export default IniciarSesion;