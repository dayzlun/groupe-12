import {Epic, ofType} from 'redux-observable';
import {LOAD_HIKE_COMMENTS, hikeCommentsLoaded} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getHikeComments} from '../api/commentsApi';

const loadHikeCommentsEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_HIKE_COMMENTS),
    flatMap(({hikeid}) => getHikeComments(hikeid)),
    map(({comments}) => hikeCommentsLoaded(comments))
  );

export const commentEpics = [loadHikeCommentsEpic];
