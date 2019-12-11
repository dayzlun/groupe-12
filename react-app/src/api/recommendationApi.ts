import {delay} from './common';
import {Observable, from} from 'rxjs';
import {mockedRecommendedHikes} from '../recommendation/reducer';
import {Hike} from '../models/hike';

export const getRecommendedHikesForUser = (userid: string): Observable<{hikes: Hike[]}> => {
  const fakeApi = async (userid: string) => {
    await delay(2000);
    return {hikes: mockedRecommendedHikes};
  };
  return from(fakeApi(userid));
};
