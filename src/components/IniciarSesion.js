import React from 'react';
import { Link } from 'react-router-dom';

function IniciarSesion({ setMostrarIniciarSesion,  }) {

//CREO EL OBJETO Y SE LO PASO A NAVBAR


  return (
    <>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <div className="pb-5"></div>
      <center>
        <div className="card text-center cardIni">
          <div className="card-body">
            <h5 className="card-title tituloCard pb-5">Iniciar Sesión</h5>

              <form >
              <input type="text" name="mail" className="u-full-width medidainput" placeholder="Mail" autoComplete="off" />
              <input type="text" name="contraseña" className="u-full-width medidainput" placeholder="Contraseña" autoComplete="off" />
              <a className="boton nav-link px-5 colorLetraIni pb-5" href="#">
                ¿Has olvidado tu contraseña?
              </a>
              <button type="submit" className="botonVioleta">Iniciar Sesión</button>

            </form>
          </div>
        </div>
        <div className="text-muted">
          <Link className="boton nav-link px-5 colorLetraIni" to="/registro">
            ¿No tienes un perfil? ¡Regístrate!
          </Link>
        </div>
      </center>
    </>
  );
}


export default IniciarSesion;
