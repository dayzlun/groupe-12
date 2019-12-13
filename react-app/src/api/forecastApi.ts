import {delay} from './common';
import {Observable, from} from 'rxjs';
import { WeatherForecast } from '../models/forecast';
import {mockedWeatherForecast} from '../forecast/reducer';
import { LocationCoordinates } from '../models/hike';

export const getForecast = (coordinates: LocationCoordinates): Observable<{weatherForecast: WeatherForecast;}> => {
    const fakeApi = async (coordinates: LocationCoordinates) => {
        await delay(2000);
        return {weatherForecast: mockedWeatherForecast};
    }
    return from(fakeApi(coordinates));
}