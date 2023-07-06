import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import IniciarSesion from './components/IniciarSesion';
import CrearCampañas from './components/CrearCampañas';
import './App.css';
import user from './context/user.js';

function App() {
  const [token, setToken] = useState('');
  const [usuario, setUsuario] = useState({});
  const [tipo, setTipo] = useState('');

  const userSettings = {
    token,
    usuario,
    tipo,
    setToken,
    setUsuario,
    setTipo,
  };


  return (
    <user.Provider value={userSettings}>{
    
        <Router>
          <NavBar />
        <div className= "marginCostados">
          <Routes>
            <Route path="/inciosesion" element={<IniciarSesion />} path2="/campaña" element2={<CrearCampañas />} />
          </Routes>

          </div>
        </Router>}

    </user.Provider>
  );
}

export default App;
