import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {UserPreferences, HikerAgeRange} from '../models/preferences';
import {LOAD_USER_PREFERENCES, USER_PREFERENCES_LOADED, UserPreferencesLoaded} from './actions';

export type PreferencesState = {
  userPreferences?: UserPreferences;
  loading: boolean;
};

export const initialPreferencesState: PreferencesState = {
  loading: false
};

export const mockedUserPreferences: UserPreferences = {
  userid: '1',
  otherHikersAge: HikerAgeRange.none,
  avgHikeDuration: 4,
  elevationGain: 250
};

export const preferencesReducer: Reducer<PreferencesState, AnyActions> = (
  preferencesState: PreferencesState | undefined,
  action: AnyActions
) => {
  if (!preferencesState) return initialPreferencesState;
  switch (action.type) {
    case LOAD_USER_PREFERENCES:
      return {
        ...preferencesState,
        userPreferences: undefined,
        loading: true
      };
    case USER_PREFERENCES_LOADED:
      const userPreferences = (action as UserPreferencesLoaded).userPreferences;
      return {
        ...preferencesState,
        loading: false,
        userPreferences
      };
    default:
      return preferencesState;
  }
};
