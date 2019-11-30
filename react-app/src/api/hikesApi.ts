import {Hike} from '../models/hike';
import {delay} from './common';
import {mockedHikes} from '../hike/reducer';
import {from, Observable} from 'rxjs';
import {Area} from '../models/area';

export const fetchHikesObservable = (areas: Area[]): Observable<{hikes: Hike[]}> => {
  const fetchHikes = async () => {
    await delay(3000);
    return {hikes: mockedHikes};
  };
  return from(fetchHikes());
};
