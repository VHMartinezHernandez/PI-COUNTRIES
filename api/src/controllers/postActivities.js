const {Activity} = require("../db");

const postActivities = async ({id, name, difficulty, duration, season, countries}) => {
    const newActivity = await Activity.create({id, name, difficulty, duration, season,});
    newActivity.addCountry(countries);
    return newActivity;
}

module.exports = postActivities;