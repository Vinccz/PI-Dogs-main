// En tu componente FormPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { createDog } from './actions'; // Define tus acciones

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    heightMin: '',
    heightMax: '',
    weightMin: '',
    weightMax: '',
    lifeSpan: '',
    temperaments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario (puedes usar axios para hacer una petición POST)
    // axios.post('/dogs', formData).then((response) => console.log(response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Altura (mínima):
        <input type="number" name="heightMin" value={formData.heightMin} onChange={handleChange} required />
      </label>
      <label>
        Altura (máxima):
        <input type="number" name="heightMax" value={formData.heightMax} onChange={handleChange} required />
      </label>
      <label>
        Peso (mínimo):
        <input type="number" name="weightMin" value={formData.weightMin} onChange={handleChange} required />
      </label>
      <label>
        Peso (máximo):
        <input type="number" name="weightMax" value={formData.weightMax} onChange={handleChange} required />
      </label>
      <label>
        Años de Vida:
        <input type="text" name="lifeSpan" value={formData.lifeSpan} onChange={handleChange} required />
      </label>
      <label>
        Temperamentos:
        <input type="text" name="temperaments" value={formData.temperaments} onChange={handleChange} required />
      </label>
      <button type="submit">Crear Raza</button>
    </form>
  );
};

export default FormPage;
