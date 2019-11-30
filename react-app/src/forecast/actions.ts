import {Action} from 'redux';
import {WeatherForecast} from '../models/forecast';
import {HikeCoordinates} from '../models/hike';

export const LOAD_WEATHER_FORECAST = 'forecast#loadWeaherForecast';
export type LoadWeatherForecast = Action & {
  coordinates: HikeCoordinates;
};
export const loadWeaherForecast = (coordinates: HikeCoordinates): LoadWeatherForecast => ({
  type: LOAD_WEATHER_FORECAST,
  coordinates
});

export const WEATHER_FORECAST_LOADED = 'forecast#weatherForecastLoaded';
export type WeatherForecastLoaded = Action & {
  weatherForecast: WeatherForecast;
};
export const weatherForecastLoaded = (weatherForecast: WeatherForecast): WeatherForecastLoaded => ({
  type: WEATHER_FORECAST_LOADED,
  weatherForecast
});

export type ForecastActions = LoadWeatherForecast | WeatherForecastLoaded;
