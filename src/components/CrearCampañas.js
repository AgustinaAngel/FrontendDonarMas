import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useContext } from 'react';
import user from '../context/user.js';
import navBarLink from '../context/navBarLink.js';
//import CrearCampañas from './CrearCampañas';


function CrearCampañas() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    console.log(data);

    if (data.mailBuscar === '' || data.contraseñaBuscar === '') {
      console.log("debo mostar error");

    }
    else {
      try {
        const response = await axios.post(process.env.REACT_APP_BASE_URL_DONAR + "/campanias", data);

        if (response.status === 200) {
        

          console.log("se creo con exito");
      

        } else {
          throw new Error("Hubo un error");
        }
      } catch (error) {
        console.log(error);
      }


     


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



export default CrearCampañas;
