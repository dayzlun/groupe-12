import {delay, tryFetch} from './common';
import {Observable, from} from 'rxjs';
import {mockedRecommendedHikes} from '../recommendation/reducer';
import {Hike} from '../models/hike';


  
const fetchRecommendedHikes = async (userid: string) => {
  let hikes: Hike[] = [];
  const {res, err} = await tryFetch<Hike[]>('Recommendation API', `https://recommendation.arla-sigl.fr/v1/hikes?userid=${userid}`)
  if (res) {
    hikes = res;
  }
  return {hikes, err};
};

export const getRecommendedHikesForUser = (userid: string): Observable<{hikes: Hike[], err?: string}> => {
  return from(fetchRecommendedHikes(userid));
};
