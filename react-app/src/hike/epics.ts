import {Epic, ofType} from 'redux-observable';
import {flatMap, map} from 'rxjs/operators';
import {getHikesForArea} from '../api/hikesApi';
import {hikesLoaded, LoadHikesAction, LOAD_HIKES_ACTION, hikeApiError} from './actions';

const loadHikesEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_HIKES_ACTION),
    flatMap((action: LoadHikesAction) => getHikesForArea(action.areaid)),
    map(({hikes, err}) => { 
      console.log({hikes, err});
      return err ? hikeApiError(err) : hikesLoaded(hikes)
    })
  );

export const hikeEpics = [loadHikesEpic];
