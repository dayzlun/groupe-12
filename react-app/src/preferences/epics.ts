import {Epic, ofType} from 'redux-observable';
import {LOAD_USER_PREFERENCES, userPreferencesLoaded, preferencesApiError} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getUserPreferences} from '../api/preferencesApi';

const loadUserPreferencesEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_USER_PREFERENCES),
    flatMap(({userid}) => getUserPreferences(userid)),
    map(({userPreferences, err}) =>
      err || !userPreferences
        ? preferencesApiError(err || 'Unknown')
        : userPreferencesLoaded(userPreferences)
    )
  );

export const preferencesEpics = [loadUserPreferencesEpic];
