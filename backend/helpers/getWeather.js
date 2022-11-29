const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getWeather = async (lat, lon) => {
  const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`);

  const data = await res.json();

  return { data };
};

module.exports = { getWeather };
