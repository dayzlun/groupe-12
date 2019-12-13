import {Action} from 'redux';
import {UserPreferences} from '../models/preferences';

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

export type PreferencesActions = LoadUserPreferences | UserPreferencesLoaded;
