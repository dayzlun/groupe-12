import {from, Observable} from 'rxjs';
import {Hike} from '../models/hike';
import {HIKE_API_ENDPOINT, tryFetch} from './common';

const fetchHikes = async (areaid: string) => {
  let hikes: Hike[] = [];
  const {res, err} = await tryFetch<Hike[]>(
    'Hikes API',
    `${HIKE_API_ENDPOINT}/v1/hikes?areaid=${areaid}`
  );
  if (res) {
    hikes = res;
  }
  return {hikes, err};
};

export const getHikesForArea = (areaid: string): Observable<{hikes: Hike[]; err?: string}> =>
  from(fetchHikes(areaid));
