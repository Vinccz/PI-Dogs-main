const { Temperament } = require('../src/db')
const axios = require('axios');
const getTemperamentsHandlers = async(req, res) =>{
    try {
        const response = await Temperament.findAll()
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = { getTemperamentsHandlers };