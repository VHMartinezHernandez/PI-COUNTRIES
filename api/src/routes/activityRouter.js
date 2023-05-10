const {Router} = require("express");
const {getActivityHandler, postActivityHandler} = require("../Handleres/activityHandlers")

const activityrouter = Router();

activityrouter.get("/", getActivityHandler);
activityrouter.post("/", postActivityHandler);

module.exports = activityrouter;