import {Action} from 'redux';
import {UserPreferences} from '../models/preferences';
import { ApiErrorState } from '../state/store';

export const LOAD_USER_PREFERENCES = 'preferences#loadUserPreferences';
export type LoadUserPreferences = Action & {
  userid: string;
};
export const loadUserPreferences = (userid: string): LoadUserPreferences => ({
  type: LOAD_USER_PREFERENCES,
  userid
});

export const USER_PREFERENCES_LOADED = 'preferences#userPreferencesLoaded';
export type UserPreferencesLoaded = Action & {
  userPreferences: UserPreferences;
};
export const userPreferencesLoaded = (userPreferences: UserPreferences): UserPreferencesLoaded => ({
  type: USER_PREFERENCES_LOADED,
  userPreferences
});

export const PREFERENCES_API_ERROR = 'preferences#preferencesApiError';
export type PreferencesApiError = Action & ApiErrorState;

export const preferencesApiError = (err: string): PreferencesApiError => ({
   type: PREFERENCES_API_ERROR,
   err
});


export type PreferencesActions = LoadUserPreferences | UserPreferencesLoaded;
