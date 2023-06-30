import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useContext } from 'react';
import user from '../context/user.js';
import navBarLink from '../context/navBarLink.js';
import CrearCampañas from './CrearCampañas';


function IniciarSesion({ setMostrarIniciarSesion }) {



  const myContextUser = useContext(user);
  const myContextavBarLink = useContext(navBarLink);

  //const usuarioC = useContext(donarContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  //CREO EL OBJETO Y SE LO PASO A NAVBAR

  const onSubmit = async (data) => {
    console.log(data);

    if (data.mailBuscar == '' || data.contraseñaBuscar == '') {
      console.log("debo mostar error");

    }
    else {
      try {
        const response = await axios.post(process.env.REACT_APP_BASE_URL_DONAR + "/auth/login", data);

        if (response.status === 200) {
          const data = await response.data;
          console.log(data.access_token);
          console.log(data.usuario);
          console.log(data.tipo);
          myContextUser.setToken(data.access_token);
          myContextUser.setUsuario(data.usuario);
          myContextUser.setTipo(data.tipo);

          console.log(myContextUser.token);
          console.log(myContextUser.usuario);
          console.log(myContextUser.tipo);

          //console.log(usuarioC);

          //aca guardo con el context el objeto. No tengo que escribir los atributos sino guardarlo de forma global
         /* if (myContextUser.tipo == "donante") {
          myContextavBarLink.setCampañas(<CrearCampañas/>);

          }
          if (myContextUser.tipo == "ONG") {
            myContextavBarLink.setCampañas();
           
          }*/



        } else {
          throw new Error("Logueo incorrecto");
        }
      } catch (error) {
        console.log(error);
      }

      /*Por ahora guardo el token y el usuario harcodeado
      const token = "abc123";
      const user = {
        id: 1,
        apellido: "Pepe",
        tipo: "ONG",
        direccion: "Yatay 240",*/

    }

  }


return (
  <>

    <div className="pb-5"></div>
    <div className="pb-5"></div>
    <div className="pb-5"></div>
    <center>
      <div className="card text-center cardIni">
        <div className="card-body">
          <h5 className="card-title tituloCard pb-5">Iniciar Sesión</h5>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("mail")} className="u-full-width medidainput" placeholder="Mail" autoComplete="off" />
            <input type="password" {...register("password")} className="u-full-width medidainput" placeholder="Contraseña" autoComplete="off" />
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
)}



export default IniciarSesion;
