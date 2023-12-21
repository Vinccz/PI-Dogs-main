const { Router } = require('express');
const { getDogsHandler,  getDogIdHandler, createDogHandler, getDogsApiHandler, getDogsDbHandler } = require('../../handlers/getDogsHandler');

const getDogsRoutes = Router();

getDogsRoutes.get("/", getDogsHandler);

getDogsRoutes.get("/:id", getDogIdHandler);

getDogsRoutes.post("/", createDogHandler);

// Ruta para obtener datos de la API
getDogsRoutes.get("/api", getDogsApiHandler);

// Ruta para obtener datos de la base de datos
getDogsRoutes.get("/db", getDogsDbHandler);


module.exports = getDogsRoutes;
