import {Observable, from} from 'rxjs';
import {PointOfInterest} from '../models/point-of-interest';
import {delay} from './common';
import {mockedPointsOfInterest} from '../poi/reducer';

export const getPointsOfInterestsForHike = (
  hikeid: string
): Observable<{pois: PointOfInterest[]}> => {
  const fakeApi = async (hikeid: string) => {
    await delay(2000);
    return {pois: mockedPointsOfInterest};
  };
  return from(fakeApi(hikeid));
};
