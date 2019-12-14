import {delay, tryFetch} from './common';
import {Observable, from} from 'rxjs';
import {HikerGroup} from '../models/hiker-group';
import {mockedHikerGroups} from '../find-a-group/reducer';

const fetchGroups = async (userid: string) => {
  let groups: HikerGroup[] = [];
  const {res, err} = await tryFetch<HikerGroup[]>(
    'Hikers Groups API',
    `https://hikers.arla-sigl.fr/v1/groups?userid=${userid}`
  );
  if (res) {
    groups = res;
  }
  return {groups, err};
};

export const fetchHikerGroupsObservable = (userid: string): Observable<{groups: HikerGroup[], err?: string}> => {
  return from(fetchGroups(userid));
};
