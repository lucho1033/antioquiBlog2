import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import LugaresTranscurridos from './components/LugaresTranscurridos';
import LugaresPopulares from './components/LugaresPopulares';
import GaleriaImagenes from './components/GaleriaImagenes';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta de inicio de sesión */}
        <Route path="/homepage" element={<HomePage />} /> {/* Ruta para HomePage */}
        <Route path="/lugares-transcurridos" element={<LugaresTranscurridos />} />
        <Route path="/lugares-populares" element={<LugaresPopulares />} />
        <Route path="/galeria-imagenes" element={<GaleriaImagenes />} />
      </Routes>
    </Router>
  );
}

export default App;

