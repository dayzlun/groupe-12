import {Epic, ofType} from 'redux-observable';
import {LOAD_RECOMMENDED_HIKES, recommendedHikesLoaded, recommendationApiError} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getRecommendedHikesForUser} from '../api/recommendationApi';

const loadRecommendedHikesEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_RECOMMENDED_HIKES),
    flatMap(({userid}) => getRecommendedHikesForUser(userid)),
    map(({hikes, err}) => (err ? recommendationApiError(err) : recommendedHikesLoaded(hikes)))
  );

export const recommendationEpics = [loadRecommendedHikesEpic];
