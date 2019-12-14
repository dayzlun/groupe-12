import {Observable, from} from 'rxjs';
import {delay, tryFetch} from './common';
import {HikeRating} from '../models/hike-rating';

const fetchRatings = async (hikeid: string) => {
  let hikeRating: HikeRating | undefined;
  const {res, err} = await tryFetch<HikeRating>(
    'Rating API',
    `https://ratings.arla-sigl.fr/v1/hike?hikeid=${hikeid}`
  );
  if (res) {
    hikeRating = res;
  }
  return {hikeRating, err};
};

export const getRatingForHike = (
  hikeid: string
): Observable<{hikeRating?: HikeRating; err?: string}> => {
  return from(fetchRatings(hikeid));
};
