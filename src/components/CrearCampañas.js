import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const CrearCampañas = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleClick = () => {
    setShowForm(true);
  };

  const onSubmit = async (data) => {
    console.log(data);

    if (data.nombre === '' || data.descripcion === '') {
      console.log("debo mostar error");

    }
    else {
      /*try {
        const response = await axios.post(process.env.REACT_APP_BASE_URL_DONAR + "/campanias", data);

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
          if (myContextUser.tipo === "Donante") {
          //myContextavBarLink.setCampañas(<CrearCampañas/>);
          console.log("HOLA DONANTE");

          }
          if (myContextUser.tipo === "ONG") {
            //myContextavBarLink.setCampañas();
            console.log("HOLA ONG");
            myContextavBarLink.setCampañas(<CrearCampañas />);
          }


        } else {
          throw new Error("Logueo incorrecto");
        }
      } catch (error) {
        console.log(error);
      }*/

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
      <div className="marginCostados">
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="botonCrearCampaña marginCostados" onClick={handleClick}>
          Crear Nueva Campaña
        </button>
      </div>
      <div className="pb-5"></div>



      {showForm && (
        <form onSubmit={handleSubmit(onSubmit)}>


          <div className="card text-center cardCrearCampaña cardCrear">
            <div className="card-body">
              <h5 className="card-title tituloCard pb-5">Nueva Campaña</h5>
              <div className="inputCrear">
              <label align="left" >Nombre: </label>
              </div>
             
              <input type="text" {...register("nombre")} className="medidainput" placeholder="Ingrese nombre campaña" autoComplete="off" />
              <br />

              <div className="inputCrear">
              <label align="left">Descripción:</label>
              </div>
          
              <input type="text" {...register("descripccion")} className="medidainput" placeholder="Ingrese descripción campaña" autoComplete="off" />
              <br />
              <button className=" botonVioleta" type="submit">Enviar</button>

            </div>
          </div>

        </form>
      )}
</div>


    </>
  );
};

export default CrearCampañas;
