import {Observable, from} from 'rxjs';
import {PointOfInterest} from '../models/point-of-interest';
import {delay, tryFetch} from './common';
import {mockedPointsOfInterest} from '../poi/reducer';

const fetchPOI = async (hikeid: string) => {
  let pois: PointOfInterest[] = [];
  const {res, err} = await tryFetch<PointOfInterest[]>(
    'Point Of Interests API',
    `https://pois.arla-sigl.fr/v1/poi?hikeid=${hikeid}`
  );
  if (res) {
    pois = res;
  }
  return {pois, err};
};


export const getPointsOfInterestsForHike = (
  hikeid: string
): Observable<{pois: PointOfInterest[]; err?: string}> => {
  
  return from(fetchPOI(hikeid));
};
