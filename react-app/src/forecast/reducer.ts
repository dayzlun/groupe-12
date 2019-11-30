import {Reducer} from 'redux';
import {WeatherForecast} from '../models/forecast';
import {AnyActions} from '../actions';
import {LOAD_WEATHER_FORECAST, WEATHER_FORECAST_LOADED, WeatherForecastLoaded} from './actions';

export const mockedWeatherForecast: WeatherForecast = {
  city: {
    name: 'Tawarano',
    coord: {lat: 35.0164, lon: 139.0077}
  },
  today: [
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-01-30 18:00:00',
      temp: 283.76,
      tempMin: 283.76,
      tempMax: 283.761,
      windSpeed: 7.27
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-01-30 21:00:00',
      temp: 282.56,
      tempMin: 282.56,
      tempMax: 282.563,
      windSpeed: 6.21
    }
  ],
  tomorrow: [
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01d'
        }
      ],
      date: '2017-01-31 00:00:00',
      temp: 282.3,
      tempMin: 282.296,
      tempMax: 282.3,
      windSpeed: 6.71
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01d'
        }
      ],
      date: '2017-01-31 03:00:00',
      temp: 282.27,
      tempMin: 282.265,
      tempMax: 282.27,
      windSpeed: 5.46
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01d'
        }
      ],
      date: '2017-01-31 06:00:00',
      temp: 282.656,
      tempMin: 282.656,
      tempMax: 282.656,
      windSpeed: 4.11
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-01-31 09:00:00',
      temp: 282.783,
      tempMin: 282.783,
      tempMax: 282.783,
      windSpeed: 3.6
    },
    {
      weather: [
        {
          description: 'broken clouds',
          icon: '04n'
        }
      ],
      date: '2017-01-31 12:00:00',
      temp: 283.335,
      tempMin: 283.335,
      tempMax: 283.335,
      windSpeed: 3.37
    },
    {
      weather: [
        {
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      date: '2017-01-31 15:00:00',
      temp: 284.657,
      tempMin: 284.657,
      tempMax: 284.657,
      windSpeed: 3.32
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '02n'
        }
      ],
      date: '2017-01-31 18:00:00',
      temp: 284.095,
      tempMin: 284.095,
      tempMax: 284.095,
      windSpeed: 4.26
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-01-31 21:00:00',
      temp: 283.211,
      tempMin: 283.211,
      tempMax: 283.211,
      windSpeed: 4.32
    }
  ],
  inTwoDays: [
    {
      weather: [
        {
          description: 'few clouds',
          icon: '02d'
        }
      ],
      date: '2017-02-01 00:00:00',
      temp: 284.179,
      tempMin: 284.179,
      tempMax: 284.179,
      windSpeed: 10.16
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '02d'
        }
      ],
      date: '2017-02-01 03:00:00',
      temp: 284.829,
      tempMin: 284.829,
      tempMax: 284.829,
      windSpeed: 13.76
    },
    {
      weather: [
        {
          description: 'few clouds',
          icon: '02d'
        }
      ],
      date: '2017-02-01 06:00:00',
      temp: 285.702,
      tempMin: 285.702,
      tempMax: 285.702,
      windSpeed: 12.75
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-02-01 09:00:00',
      temp: 285.494,
      tempMin: 285.494,
      tempMax: 285.494,
      windSpeed: 12.33
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-02-01 12:00:00',
      temp: 285.16,
      tempMin: 285.16,
      tempMax: 285.16,
      windSpeed: 12.21
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-02-01 15:00:00',
      temp: 284.161,
      tempMin: 284.161,
      tempMax: 284.161,
      windSpeed: 12.21
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-02-01 18:00:00',
      temp: 282.63,
      tempMin: 282.63,
      tempMax: 282.63,
      windSpeed: 9.3
    },
    {
      weather: [
        {
          description: 'clear sky',
          icon: '01n'
        }
      ],
      date: '2017-02-01 21:00:00',
      temp: 281.856,
      tempMin: 281.856,
      tempMax: 281.856,
      windSpeed: 8.91
    }
  ]
};

export type ForecastState = {
  weatherForecast?: WeatherForecast;
  loading: boolean;
};

export const initialForecastState: ForecastState = {
  loading: false
};

export const forecastReducer: Reducer<ForecastState, AnyActions> = (
  forecastState: ForecastState | undefined,
  action: AnyActions
) => {
  if (!forecastState) return initialForecastState;
  switch (action.type) {
    case LOAD_WEATHER_FORECAST:
      return {
        ...forecastState,
        loading: true
      };
    case WEATHER_FORECAST_LOADED:
      const weatherForecast = (action as WeatherForecastLoaded).weatherForecast;
      return {
        ...forecastState,
        weatherForecast,
        loading: false
      };
    default:
      return forecastState;
  }
};
