import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CrearCampañas = () => {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleClick = () => {
    setShowForm(true);
  };

  const onSubmit = async (data) => {
    console.log(data);

    if (data.nombre === '' || data.descripcion === '') {
      console.log('Debo mostrar error');
    } else {
      /*try {
        const response = await axios.post(process.env.REACT_APP_BASE_URL_DONAR + '/campanias', data);
        if (response.status === 200) {
          //const data = await response.data;
          console.log('Se guardó correctamente');
        } else {
          throw new Error('No se guardó correctamente');
        }
      } catch (error) {
        console.log(error);
      }*/

      
    }
  };

  return (
    <>
      <div className="pb-5"></div>
      <div className="marginCostados">
        {!showForm && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="botonCrearCampaña" onClick={handleClick}>
              Crear Nueva Campaña
            </button>
          </div>
        )}
        <div className="pb-3"></div>
        {showForm && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <center>
              <div className="card text-center cardCrearCampaña cardCrear">
                <div className="card-body">
                  <h5 className="card-title tituloCard pb-5">Nueva Campaña</h5>
                  <div className="inputCrear">
                    <label align="left">Nombre: </label>
                  </div>

                  <input
                    type="text"
                    {...register('nombre')}
                    className="medidainput2"
                    placeholder="Ingrese nombre campaña"
                    autoComplete="off"
                  />
                  <br />

                  <div className="inputCrear">
                    <label align="left">Descripción:</label>
                  </div>

                  <input
                    type="text"
                    {...register('descripccion')}
                    className="medidainput2"
                    placeholder="Ingrese descripción campaña"
                    autoComplete="off"
                  />
                  <br />

                  <div className="inputCrear">
                    <label align="left">Adjuntar imagen:</label>
                  </div>
                  <input type="file" {...register('imagen')} />
                  <br />

                  <div className="inputCrear">
                    <label align="left">Fecha inicio:</label>
                  </div>
                  <input type="date" name="fechaInicio" className="medidainput2" autoComplete="off" />

                  <br />

                  <div className="inputCrear">
                    <label align="left">Fecha fin:</label>
                  </div>
                  <input type="date" name="fechaFin" className="medidainput2" autoComplete="off" />
                  <br />
                  <button className=" botonVioleta" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
            </center>
          </form>
        )}
      </div>
    </>
  );
};

export default CrearCampañas;
