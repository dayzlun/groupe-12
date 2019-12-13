import {Epic, ofType} from 'redux-observable';
import {LOAD_POINTS_OF_INTERESTS, pointsOfInterestLoaded} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getPointsOfInterestsForHike} from '../api/poiApi';

const loadPointsOfInterestEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_POINTS_OF_INTERESTS),
    flatMap(({hikeid}) => getPointsOfInterestsForHike(hikeid)),
    map(({pois}) => pointsOfInterestLoaded(pois))
  );

export const poiEpics = [loadPointsOfInterestEpic];
