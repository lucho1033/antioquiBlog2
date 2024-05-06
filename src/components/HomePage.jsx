import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <h1>¡Bienvenidos a Antioquia Blog!</h1>
      {/* Enlaces a los componentes */}
      <ul>
        <li><Link to="/lugares-transcurridos">Lugares Transcurridos</Link></li>
        <li><Link to="/lugares-populares">Lugares Populares</Link></li>
        <li><Link to="/galeria-imagenes">Galería de Imágenes</Link></li>

      </ul>
    </div>
  );
}

export default HomePage;
