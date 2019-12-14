import {Action} from 'redux';
import {WeatherForecast} from '../models/forecast';
import {LocationCoordinates} from '../models/hike';
import { ApiError } from '../state/store';

export const LOAD_WEATHER_FORECAST = 'forecast#loadWeaherForecast';
export type LoadWeatherForecast = Action & {
  coordinates: LocationCoordinates;
};
export const loadWeaherForecast = (coordinates: LocationCoordinates): LoadWeatherForecast => ({
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

export const FORECAST_API_ERROR = 'forecast#forecastApiError';
export type ForecastApiError = Action & ApiError;
export const forecastApiError = (err: string): ForecastApiError => ({
   type: FORECAST_API_ERROR,
   err
});


export type ForecastActions = LoadWeatherForecast | WeatherForecastLoaded;
