import {Action} from 'redux';
import {UserDurationWalkedStats, UserDistanceWalkedStats} from './reducer';

export const LOAD_USER_DISTANCE_WALKED = 'statistics#loadUserDistanceWalked';
export type LoadUserDistanceWalked = Action & {
  userid: string;
};
export const loadUserDistanceWalked = (userid: string): LoadUserDistanceWalked => ({
  type: LOAD_USER_DISTANCE_WALKED,
  userid
});

export const USER_DISTANCE_WALKED_LOADED = 'statistics#userDistanceWalkedLoaded';
export type UserDistanceWalkedLoaded = Action & {
  userStats: UserDistanceWalkedStats;
};
export const userDistanceWalkedLoaded = (
  userStats: UserDistanceWalkedStats
): UserDistanceWalkedLoaded => ({
  type: USER_DISTANCE_WALKED_LOADED,
  userStats
});

export const LOAD_USER_DURATION_WALKED = 'statistics#loadUserDurationWalked';
export type LoadUserDurationWalked = Action & {
  userid: string;
};
export const loadUserDurationWalked = (userid: string): LoadUserDurationWalked => ({
  type: LOAD_USER_DURATION_WALKED,
  userid
});

export const USER_DURATION_WALKED_LOADED = 'statistics#userDurationWalkedLoaded';
export type UserDurationWalkedLoaded = Action & {
  userStats: UserDurationWalkedStats;
};
export const userDurationWalkedLoaded = (
  userStats: UserDurationWalkedStats
): UserDurationWalkedLoaded => ({
  type: USER_DURATION_WALKED_LOADED,
  userStats
});

export type StatisticsActions = LoadUserDistanceWalked | UserDistanceWalkedLoaded;
