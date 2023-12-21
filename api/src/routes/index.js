const { Router } = require('express');
const getDogsRoutes = require("../routes/getDogsRoutes");
const getTemperamentRoutes = require("../routes/getTemperamentRoutes");

const router = Router();


router.use("/dogs", getDogsRoutes);

router.use("/temperament", getTemperamentRoutes);

// Otros routers si los tienes
// router.use("/postDogs",  postDogsRoutes);

module.exports = router;

