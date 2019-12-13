import {from, Observable} from 'rxjs';
import {
  mockedWalkedDistance,
  mockedWalkedDuration,
  UserDistanceWalkedStats,
  UserDurationWalkedStats
} from '../statistics/reducer';
import {delay} from './common';

export const getUserDurationWalkedStats = (
  userid: string
): Observable<{userDurationWalkStats: UserDurationWalkedStats}> => {
  const fakeApi = async (userid: string) => {
    await delay(2000);
    return {userDurationWalkStats: mockedWalkedDuration};
  };
  return from(fakeApi(userid));
};

export const getUserDistanceWalkedStats = (
  userid: string
): Observable<{userDistanceWalkStats: UserDistanceWalkedStats}> => {
  const fakeApi = async (userid: string) => {
    await delay(2000);
    return {userDistanceWalkStats: mockedWalkedDistance};
  };
  return from(fakeApi(userid));
};
