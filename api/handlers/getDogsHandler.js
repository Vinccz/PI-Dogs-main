const axios = require('axios');
const { response } = require('express');
const { todosLosPerritos, allDogsId, nuevoPerro } = require('../controllers/dogsController');
const { Dog, Temperament } = require("../src/db");




const getDogsHandler = async (req, res) => {
  const { name } = req.query;

  try {
      const response = await todosLosPerritos(name);
      res.status(200).json(response);
  } catch (error) {
      console.error('Error en getDogsHandler:', error.message);
      if (error instanceof Error) {
          res.status(500).json({ error: 'Error interno del servidor' });
      } else {
          res.status(404).json({ error: 'No se encontraron perritos' });
      }
  }
};

const getDogIdHandler = async (req, res) => {
    const { id } = req.params;

    const dogId = isNaN(id) ? "base" : "api"

    try {
      const response = await allDogsId(id, dogId);
      res.status(200).json(response);
    } catch (error) {
      res.status(404).json({ error: "El Id no es numero valido" });
    }
  };

const createDogHandler = async (req, res) => {
  const { name, image, peso, altura, años_de_vida, temperament } = req.body;
  try {
    const newDog = await nuevoPerro(name, image, peso, altura, años_de_vida, temperament)
    

    res.status(201).json(newDog);
  }
  
  
  catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDogsApiHandler = async (req, res) => {
  try {
    // Hacer la llamada a la API para obtener datos
    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
     // Aplicar filtros a las propiedades si es necesario
    // Por ejemplo, si quieres filtrar por temperamento
    const filteredData = data.filter(dog => dog.temperament.includes(req.query.temperament));
    res.status(200).json(filteredData);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}


const getDogsDbHandler = async (req, res) => {
  try {
    // Obtener datos de la base de datos
    const dogsFromDb = await Dog.findAll({
      include: {
        model: Temperament,
      },
    });

    // Aplicar filtros a las propiedades si es necesario
    // Por ejemplo, si quieres filtrar por temperamento
    const filteredDogs = dogsFromDb.filter(dog => dog.temperament.includes(req.query.temperament));

    res.status(200).json(filteredDogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {getDogsHandler, getDogIdHandler, createDogHandler, getDogsApiHandler, getDogsDbHandler};
