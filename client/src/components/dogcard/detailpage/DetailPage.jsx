// En tu componente DetailPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const [dogDetails, setDogDetails] = useState(null);

  useEffect(() => {
    // Lógica para obtener los detalles del perro con el ID proporcionado
    // axios.get(`/dog/${id}`).then((response) => setDogDetails(response.data));
  }, [id]);

  if (!dogDetails) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <p>ID: {dogDetails.id}</p>
      <img src={dogDetails.image} alt={dogDetails.name} />
      <p>Nombre: {dogDetails.name}</p>
      <p>Altura: {`${dogDetails.height.min} - ${dogDetails.height.max}`}</p>
      <p>Peso: {`${dogDetails.weight.min} - ${dogDetails.weight.max}`}</p>
      <p>Temperamentos: {dogDetails.temperaments.join(', ')}</p>
      <p>Años de Vida: {dogDetails.life_span}</p>
    </div>
  );
};

export default DetailPage;