import {Epic, ofType} from 'redux-observable';
import {flatMap, map} from 'rxjs/operators';
import {fetchHikesObservable} from '../api/hikesApi';
import {hikesLoaded, LoadHikesAction, LOAD_HIKES_ACTION} from './actions';

const loadHikesEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_HIKES_ACTION),
    flatMap((action: LoadHikesAction) => fetchHikesObservable(action.areas)),
    map(({hikes}) => hikesLoaded(hikes))
  );

export const hikeEpics = [loadHikesEpic];
