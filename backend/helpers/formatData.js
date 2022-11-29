const formatData = (location, weather) => {
  const data = weather.data.list.map((item) => ({
    temp: item.main.temp,
    feelsLike: item.main.feels_like,
    pressure: item.main.pressure,
    humidity: item.main.humidity,
    description: item.weather[0].main,
    icon: item.weather[0].icon,
    wind: item.wind.speed,
    date: item.dt_txt,
  }));

  return { name: location.name, data };
};

module.exports = { formatData };
