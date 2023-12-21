import React from 'react';

const DogCard = ({ dog }) => {
  return (
    <div className="dog-card">
      <img src={dog.image} alt={dog.name} className="dog-image" />
      <div className="dog-details">
        <h2>{dog.name}</h2>
        <p>
          <strong>Altura:</strong> {dog.height}
        </p>
        <p>
          <strong>Peso:</strong> {dog.weight}
        </p>
        <p>
          <strong>Años de Vida:</strong> {dog.lifeSpan}
        </p>
        <p>
          <strong>Temperamentos:</strong> {dog.temperaments.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default DogCard;
