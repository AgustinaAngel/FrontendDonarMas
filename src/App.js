import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import IniciarSesion from './components/IniciarSesion';
import CrearCampañas from './components/CrearCampañas';
import './App.css';
import user from './context/user.js';
import Home from './components/Home';

function App() {
  const [token, setToken] = useState('');
  const [usuario, setUsuario] = useState({});
  const [tipo, setTipo] = useState('');
  const [mostrarHome, setMostrarHome] = useState(true); // Variable de estado para controlar la visibilidad de Home

  const userSettings = {
    token,
    usuario,
    tipo,
    setToken,
    setUsuario,
    setTipo,
  };

  const ocultarHome = () => {
    setMostrarHome(false);
  };

  return (
    <user.Provider value={userSettings}>
      <Router>
        <NavBar ocultarHome={ocultarHome} /> {/* Pasar la función ocultarHome como prop a NavBar */}
        <div className="marginCostados">
          {mostrarHome && <Home />} {/* Mostrar Home solo si mostrarHome es true */}
          <Routes>
            <Route path="/inciosesion" element={<IniciarSesion />} path2="/campaña" element2={<CrearCampañas />} />
          </Routes>
        </div>
      </Router>
    </user.Provider>
  );
}

export default App;
