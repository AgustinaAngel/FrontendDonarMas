import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import IniciarSesion from './components/IniciarSesion';
import CrearCampañas from './components/CrearCampañas';
import './App.css';
import user from './context/user.js';
import navBarLinks from './context/navBarLink.js';

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


  const [mapa, setMapa] = useState('');
  const [campañas, setCampañas] = useState('');
  const [noticias, setNotocias] = useState('');
  const [misDonaciones, setMisDonaciones] = useState('');

  const navBarLinksSettings = {
    mapa,
    campañas,
    noticias,
    misDonaciones,
    setMapa,
    setCampañas,
    setNotocias,
    setMisDonaciones,
  };


  return (
    <user.Provider value={userSettings}>{
      <navBarLinks.Provider value={navBarLinksSettings}>{
        <Router>
          <NavBar />
          <Routes>
            <Route path="/inciosesion" element={<IniciarSesion />} path2="/campaña" element2={<CrearCampañas />} />
          </Routes>


        </Router>}
      </navBarLinks.Provider>}
    </user.Provider>
  );
}

export default App;
