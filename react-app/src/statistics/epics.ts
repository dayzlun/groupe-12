import {Epic, ofType} from 'redux-observable';
import {flatMap, map} from 'rxjs/operators';
import {getUserDistanceWalkedStats, getUserDurationWalkedStats} from '../api/statisticsApi';
import {
  LOAD_USER_DISTANCE_WALKED,
  LOAD_USER_DURATION_WALKED,
  userDistanceWalkedLoaded,
  userDurationWalkedLoaded,
  durationStatsApiError,
  distanceStatsApiError
} from './actions';

const loadUserDurationWalkedEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_USER_DURATION_WALKED),
    flatMap(({userid}) => getUserDurationWalkedStats(userid)),
    map(({userDurationWalkStats, err}) =>
      err || !userDurationWalkStats
        ? durationStatsApiError(err || 'Unkown')
        : userDurationWalkedLoaded(userDurationWalkStats)
    )
  );

const loadUserDistanceWalkedEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_USER_DISTANCE_WALKED),
    flatMap(({userid}) => getUserDistanceWalkedStats(userid)),
    map(({userDistanceWalkStats, err}) =>
      err || !userDistanceWalkStats
        ? distanceStatsApiError(err || 'Unkown')
        : userDistanceWalkedLoaded(userDistanceWalkStats)
    )
  );

export const statisticsEpics = [loadUserDurationWalkedEpic, loadUserDistanceWalkedEpic];
