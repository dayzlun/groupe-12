import {Observable, from} from 'rxjs';
import {UserPreferences} from '../models/preferences';
import {delay} from './common';
import {mockedUserPreferences} from '../preferences/reducer';

export const getUserPreferences = (
  userid: string
): Observable<{userPreferences: UserPreferences}> => {
  const fakeApi = async (userid: string) => {
    await delay(1500);
    return {userPreferences: mockedUserPreferences};
  };
  return from(fakeApi(userid));
};
