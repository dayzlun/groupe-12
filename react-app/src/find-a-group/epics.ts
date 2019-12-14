import {Epic, ofType} from 'redux-observable';
import {LOAD_HIKER_GROUPS, hikerGroupsLoaded, hikerGroupApiError} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {fetchHikerGroupsObservable} from '../api/hikerGroupApi';

const loadHikerGroupsEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_HIKER_GROUPS),
    flatMap(fetchHikerGroupsObservable),
    map(({groups, err}) => err ? hikerGroupApiError(err) : hikerGroupsLoaded(groups))
  );

export const hikerGroupEpics = [loadHikerGroupsEpic];
