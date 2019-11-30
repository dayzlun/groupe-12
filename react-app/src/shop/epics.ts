import {Epic, ofType} from 'redux-observable';
import {LOAD_CATALOG, catalogLoaded} from './actions';
import {flatMap, map} from 'rxjs/operators';
import {getCatalogItemForUser} from '../api/shopApi';

const loadCatalogEpic: Epic = action$ =>
  action$.pipe(
    ofType(LOAD_CATALOG),
    flatMap(({userid}) => getCatalogItemForUser(userid)),
    map(({items}) => catalogLoaded(items))
  );

export const shopEpics = [loadCatalogEpic];
