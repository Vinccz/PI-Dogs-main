const { Router } = require('express');
const { getTemperamentsHandlers } = require('../../handlers/getTemperametHandlers')


const getTemperamentRoutes = Router() 



getTemperamentRoutes.get('/', getTemperamentsHandlers)



module.exports = getTemperamentRoutes;