import {from, Observable} from 'rxjs';
import {
  mockedWalkedDistance,
  mockedWalkedDuration,
  UserDistanceWalkedStats,
  UserDurationWalkedStats
} from '../statistics/reducer';
import {delay, tryFetch} from './common';

const fetchDurationStats = async (userid: string) => {
  let userDurationWalkStats : UserDurationWalkedStats | undefined;
  const {res, err} = await tryFetch<UserDurationWalkedStats>(
    'Duration Stats API',
    `https://duration-stats.arla-sigl.fr/v1/duration?userid=${userid}`
  );
  if (res) {
    userDurationWalkStats = res;
  }
  return {userDurationWalkStats, err};
};

const fetchDistanceStats = async (userid: string) => {
  let userDistanceWalkStats : UserDistanceWalkedStats | undefined;
  const {res, err} = await tryFetch<UserDistanceWalkedStats>(
    'Distance Stats API',
    `https://distance-stats.arla-sigl.fr/v1/distance?userid=${userid}`
  );
  if (res) {
    userDistanceWalkStats = res;
  }
  return {userDistanceWalkStats, err};
};

export const getUserDurationWalkedStats = (
  userid: string
): Observable<{userDurationWalkStats?: UserDurationWalkedStats, err?: string}> => {
  return from(fetchDurationStats(userid));
};

export const getUserDistanceWalkedStats = (
  userid: string
): Observable<{userDistanceWalkStats?: UserDistanceWalkedStats, err?: string}> => {
  return from(fetchDistanceStats(userid));
};
