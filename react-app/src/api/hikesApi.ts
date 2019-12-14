import {from, Observable} from 'rxjs';
import {Hike} from '../models/hike';

const fetchHikes = async (areaid: string) => {
  let err: string | undefined = undefined;
  let hikes: Hike[] = [];
  try {
    const response = await fetch(`http://localhost:3000/v1/hikes?areaid=${areaid}`);
    if (response.status >= 200 && response.status < 300)
      hikes = await response.json();
    else 
      err = 'Hikes API returned an error'
  } catch (e) {
    console.log('Error fetching hikes: ', e);
    err = 'Hikes API unavailable!';
  } finally {
    return {hikes, err};
  }
};

export const getHikesForArea = (areaid: string): Observable<{hikes: Hike[]; err?: string}> =>
  from(fetchHikes(areaid));
