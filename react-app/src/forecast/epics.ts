import {Epic, ofType} from 'redux-observable';
import {LOAD_WEATHER_FORECAST, weatherForecastLoaded} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getForecast} from '../api/forecastApi';

const loadWeatherForecastEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_WEATHER_FORECAST),
    flatMap(({coordinates}) => getForecast(coordinates)),
    map(({weatherForecast}) => weatherForecastLoaded(weatherForecast))
  );

export const forecastEpics = [loadWeatherForecastEpic];
