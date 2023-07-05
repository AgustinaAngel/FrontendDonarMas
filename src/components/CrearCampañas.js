import React, { useState } from 'react';

const CrearCampañas = () => {
  const [showForm, setShowForm] = useState(false);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar los datos del formulario
    console.log('Nombre:', nombre);
    console.log('Descripción:', descripcion);
  };

  return (
    <div>
      <button onClick={handleClick}>Mostrar formulario</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </label>
          <br />
          <label>
            Descripción:
            <textarea
              name="descripcion"
              value={descripcion}
              onChange={(event) => setDescripcion(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default CrearCampañas;
