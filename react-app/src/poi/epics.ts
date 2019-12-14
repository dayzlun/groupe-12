import {Epic, ofType} from 'redux-observable';
import {LOAD_POINTS_OF_INTERESTS, pointsOfInterestLoaded, poiApiError} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getPointsOfInterestsForHike} from '../api/poiApi';

const loadPointsOfInterestEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_POINTS_OF_INTERESTS),
    flatMap(({hikeid}) => getPointsOfInterestsForHike(hikeid)),
    map(({pois, err}) => err ? poiApiError(err) : pointsOfInterestLoaded(pois))
  );

export const poiEpics = [loadPointsOfInterestEpic];
