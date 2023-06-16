import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import IniciarSesion from './components/IniciarSesion';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/inciosesion" element={<IniciarSesion />} />
      </Routes>
    </Router>
  );
}

export default App;
