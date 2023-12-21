import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Importa los estilos CSS

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="welcome-message">¡Bienvenidos a Dogs!</h1>
      <Link to="/home" className="enter-button">
        Ingresar a la Home Page
      </Link>
    </div>
  );
};

export default LandingPage;