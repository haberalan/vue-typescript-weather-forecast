const { getLocation } = require('../helpers/getLocation');
const { getWeather } = require('../helpers/getWeather');
const { formatData } = require('../helpers/formatData');

const getOne = async (req, res) => {
  const { id } = req.params;

  try {
    const location = await getLocation(id);

    if (location.error) {
      res.status(200).json({ error: location.error });
    } else {
      const weather = await getWeather(location.lat, location.lon);

      const data = formatData(location, weather);

      res.status(200).json({ data });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getOne };
