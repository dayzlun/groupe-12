import {Epic, ofType} from 'redux-observable';
import {LOAD_USER_PREFERENCES, userPreferencesLoaded} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getUserPreferences} from '../api/preferencesApi';

const loadUserPreferencesEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_USER_PREFERENCES),
    flatMap(({userid}) => getUserPreferences(userid)),
    map(({userPreferences}) => userPreferencesLoaded(userPreferences))
  );

export const preferencesEpics = [loadUserPreferencesEpic];
