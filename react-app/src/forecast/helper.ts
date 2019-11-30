import {Weather, ThreeHourForecast, WeatherIcon} from '../models/forecast';

export type ForecastGroupedByKey = {
  dates: string[];
  temps: number[];
  tempMins: number[];
  tempMaxs: number[];
  weatherDescriptions: string[];
  weatherIcons: string[][];
  windSpeeds: number[];
};

export const iconMap = Object({
  ['01d']: 'wi-day-sunny',
  ['01n']: 'wi-night-clear',
  ['02d']: 'wi-day-cloudy',
  ['02n']: 'wi-night-partly-cloudy',
  ['03d']: 'wi-day-cloudy',
  ['03n']: 'wi-night-cloudy',
  ['04d']: 'wi-day-cloudy',
  ['04n']: 'wi-night-cloudy',
  ['09d']: 'wi-day-rain',
  ['09n']: 'wi-night-rain',
  ['10d']: 'wi-day-rain',
  ['10n']: 'wi-night-rain',
  ['11d']: 'wi-day-thunderstorm',
  ['11n']: 'wi-night-thunderstorm',
  ['13d']: 'wi-day-snow',
  ['13n']: 'wi-night-snow',
  ['50d']: 'wi-day-windy',
  ['50n']: 'wi-day-windy'
});

const reduceWeather = (weathers: Weather[]) =>
  weathers.reduce<{weatherIcons: string[]; weatherDescription: string}>(
    ({weatherIcons, weatherDescription}, {icon, description}) => {
      const descriptionJoined =
        weatherDescription.length > 0 ? [weatherDescription, description].join(', ') : description;
      return {
        weatherIcons: weatherIcons.concat(icon),
        weatherDescription: descriptionJoined
      };
    },
    {weatherIcons: [], weatherDescription: ''}
  );

export const groupByForecastKey = (data: ThreeHourForecast[]): ForecastGroupedByKey => {
  return data.reduce<ForecastGroupedByKey>(
    (grouped, {date, temp, tempMin, tempMax, weather, windSpeed}) => {
      const {weatherDescription, weatherIcons} = reduceWeather(weather);
      return {
        dates: grouped.dates.concat(date),
        temps: grouped.temps.concat(temp),
        tempMins: grouped.temps.concat(tempMin),
        tempMaxs: grouped.temps.concat(tempMax),
        windSpeeds: grouped.temps.concat(windSpeed),
        weatherDescriptions: grouped.weatherDescriptions.concat(weatherDescription),
        weatherIcons: [...grouped.weatherIcons, weatherIcons]
      };
    },
    {
      dates: [],
      temps: [],
      tempMins: [],
      tempMaxs: [],
      weatherDescriptions: [],
      weatherIcons: [],
      windSpeeds: []
    }
  );
};
