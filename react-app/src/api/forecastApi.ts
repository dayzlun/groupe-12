import {from, Observable} from 'rxjs';
import {WeatherForecast} from '../models/forecast';
import {LocationCoordinates} from '../models/hike';
import {tryFetch} from './common';

const fetchForecast = async ({lat, lon}: LocationCoordinates) => {
  let forecast: WeatherForecast | undefined;
  const {res, err} = await tryFetch<WeatherForecast>(
    'Forecast API',
    `https://forecast.arla-sigl.fr/v1/forecast?lat=${lat}&lon=${lon}`
  );
  if (res) {
    forecast = res;
  }
  return {weatherForecast: forecast, err};
};

export const getForecast = (
  coordinates: LocationCoordinates
): Observable<{weatherForecast?: WeatherForecast; err?: string}> => {
  return from(fetchForecast(coordinates));
};
