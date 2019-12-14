import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {DistanceWalked, DurationWalked, Award} from '../models/statistics';
import {testUser} from '../api/common';
import {
  LOAD_USER_DISTANCE_WALKED,
  USER_DISTANCE_WALKED_LOADED,
  UserDistanceWalkedLoaded,
  LOAD_USER_DURATION_WALKED,
  USER_DURATION_WALKED_LOADED,
  UserDurationWalkedLoaded,
  DURATION_STATS_API_ERROR,
  DurationStatsApiError,
  DISTANCE_STATS_API_ERROR,
  DistanceStatsApiError
} from './actions';

export type UserDurationWalkedStats = {
  lastMonth: DurationWalked;
  allTime: DurationWalked;
};

export type UserDistanceWalkedStats = {
  lastMonth: DistanceWalked;
  allTime: DistanceWalked;
};

export type StatisticsState = {
  userDistanceWalked?: UserDistanceWalkedStats;
  userDurationWalked?: UserDurationWalkedStats;
  loadingDistance: boolean;
  loadingDuration: boolean;
  durationApiError?: string;
  distanceApiError?: string;
};

export const initialStatisticsState: StatisticsState = {
  loadingDistance: false,
  loadingDuration: false
};

export const mockedWalkedDuration: UserDurationWalkedStats = {
  lastMonth: {
    userid: testUser.userid,
    duration: 19,
    award: Award.superhero
  },
  allTime: {
    userid: testUser.userid,
    duration: 344,
    award: Award.superhero
  }
};

export const mockedWalkedDistance: UserDistanceWalkedStats = {
  lastMonth: {
    userid: testUser.userid,
    distance: 56,
    award: Award.superhero
  },
  allTime: {
    userid: testUser.userid,
    distance: 1033,
    award: Award.superhero
  }
};

export const statisticsReducer: Reducer<StatisticsState, AnyActions> = (
  statisticState: StatisticsState | undefined,
  action: AnyActions
) => {
  if (!statisticState) return initialStatisticsState;
  switch (action.type) {
    case LOAD_USER_DISTANCE_WALKED:
      return {
        ...statisticState,
        loadingDistance: true,
        userDistanceWalked: undefined
      };
    case USER_DISTANCE_WALKED_LOADED:
      const userDistanceWalked = (action as UserDistanceWalkedLoaded).userStats;
      return {
        ...statisticState,
        loadingDistance: false,
        userDistanceWalked
      };
    case LOAD_USER_DURATION_WALKED:
      return {
        ...statisticState,
        loadingDuration: true,
        userDurationWalked: undefined
      };
    case USER_DURATION_WALKED_LOADED:
      const userDurationWalked = (action as UserDurationWalkedLoaded).userStats;
      return {
        ...statisticState,
        loadingDuration: false,
        userDurationWalked
      };
    case DISTANCE_STATS_API_ERROR:
          return {
            ...statisticState,
            loadingDistance: false,
            distanceApiError: (action as DistanceStatsApiError).err
          }
    case DURATION_STATS_API_ERROR:
      return {
        ...statisticState,
        loadingDuration: false,
        durationApiError: (action as DurationStatsApiError).err
      }
    default:
      return statisticState;
  }
};
