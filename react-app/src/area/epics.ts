import {Epic, ofType} from 'redux-observable';
import {flatMap, map} from 'rxjs/operators';
import * as loadAreasApi from '../api/loadAreas';
import {areaLoaded, LOAD_AREA_OPTIONS_ACTION} from './actions';

const loadAreaEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_AREA_OPTIONS_ACTION),
    flatMap(() => loadAreasApi.loadAreas()),
    map(({areas}) => areaLoaded(areas))
  );

export const areaEpics = [loadAreaEpic];
