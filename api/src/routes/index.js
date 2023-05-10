const { Router } = require("express");

const activityrouter = require ("./activityRouter");
const countryrouter = require ("./countryRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countryrouter);

router.use("/activities", activityrouter);

module.exports = router;
