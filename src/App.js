import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import IniciarSesion from './components/IniciarSesion';
import CrearCampañas from './components/CrearCampañas';
import './App.css';
import user from './context/user.js';
import Home from './components/Home';
import QuieroAyudar from './components/QuieroAyudar';
import Registro from './components/Registro';

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

  const ocultarComponentes = () => {
    setMostrarHome(true);
  };


  return (
    <user.Provider value={userSettings}>
      <Router>
        <NavBar ocultarHome={ocultarHome} ocultarComponentes={ocultarComponentes} />
        <div className="marginCostados">
          {mostrarHome && <Home />}
          <Routes>
            <Route path="/inciosesion" element={<IniciarSesion />} />
            <Route path="/campaña" element={<CrearCampañas />} />
            <Route exact path="/" component={QuieroAyudar} />
            <Route path="/Registro" component={Registro} />

          </Routes>
        </div>
      </Router>
    </user.Provider >
  );
}


export default App;

