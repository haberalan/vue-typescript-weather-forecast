import WeatherHourType from './WeatherHour';

export type WeatherType = {
  data: {
    name: string;
    data: WeatherHourType[];
  };
};
