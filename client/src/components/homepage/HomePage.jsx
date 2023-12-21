import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from './actions'; // Define tus acciones



const HomePage = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      {/* Agrega tu SearchBar y otras funcionalidades aquí */}
      <div>
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
  );
};

const DogCard = ({ dog }) => {
  return (
    <div>
      <img src={dog.image} alt={dog.name} />
      <p>{`Nombre: ${dog.name}`}</p>
      <p>{`Temperamentos: ${dog.temperaments.join(', ')}`}</p>
      {/* Agrega más detalles y funcionalidades según sea necesario */}
    </div>
  );
};

export default HomePage;