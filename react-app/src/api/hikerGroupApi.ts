import {delay} from './common';
import {Observable, from} from 'rxjs';
import {HikerGroup} from '../models/hiker-group';
import {mockedHikerGroups} from '../find-a-group/reducer';

export const fetchHikerGroupsObservable = (): Observable<{groups: HikerGroup[]}> => {
  const fetchHikerGroups = async () => {
    await delay(3000);
    return {groups: mockedHikerGroups};
  };
  return from(fetchHikerGroups());
};
