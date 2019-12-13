import {Observable, from} from 'rxjs';
import {delay} from './common';
import {HikeRating} from '../models/hike-rating';

export const getRatingForHike = (hikeid: string): Observable<{hikeRating: HikeRating}> => {
  const fakeApi = async (hikeid: string) => {
    await delay(1500);
    return {hikeRating: {hikeid, numberOfRaters: 67, rating: 4}};
  };

  return from(fakeApi(hikeid));
};
