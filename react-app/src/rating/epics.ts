import {Epic, ofType} from 'redux-observable';
import {LOAD_HIKE_RATING, hikeRatingLoaded, ratingApiError} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getRatingForHike} from '../api/ratingApi';

const loadHikeRatingEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_HIKE_RATING),
    flatMap(({hikeid}) => getRatingForHike(hikeid)),
    map(({hikeRating, err}) =>
      err || !hikeRating ? ratingApiError(err || 'Unkown') : hikeRatingLoaded(hikeRating)
    )
  );

export const ratingEpics = [loadHikeRatingEpic];
