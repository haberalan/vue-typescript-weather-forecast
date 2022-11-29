const getLocation = async (city) => {
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`);

  const data = await res.json();

  if (data.length === 0) return { error: "The city you are looking for doesn' exist." };

  return {
    name: data[0].name,
    lat: data[0].lat,
    lon: data[0].lon,
  };
};

module.exports = { getLocation };
