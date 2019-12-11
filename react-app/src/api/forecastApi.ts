import {delay} from './common';
import {Observable, from} from 'rxjs';
import { WeatherForecast } from '../models/forecast';
import {mockedWeatherForecast} from '../forecast/reducer';
import { HikeCoordinates } from '../models/hike';

export const getForecast = (coordinates: HikeCoordinates): Observable<{weatherForecast: WeatherForecast;}> => {
    const fakeApi = async (coordinates: HikeCoordinates) => {
        await delay(2000);
        return {weatherForecast: mockedWeatherForecast};
    }
    return from(fakeApi(coordinates));
}