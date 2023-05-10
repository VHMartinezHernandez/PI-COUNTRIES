const getActivities = require("../controllers/getActivities");
const postActivities = require("../controllers/postActivities");

const getActivityHandler = async (req, res) => {
  try {
    const activities = await getActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActivityHandler = async (req, res) => {
    try {
      const {id, name, difficulty, duration, season, countries} = req.body;      
      const newActivity = await postActivities({id, name, difficulty, duration, season, countries});
      res.status(200).json("La actividad se creo de manera correcta");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {
  getActivityHandler,
  postActivityHandler,
};
