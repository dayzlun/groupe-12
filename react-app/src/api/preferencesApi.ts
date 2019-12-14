import {Observable, from} from 'rxjs';
import {UserPreferences} from '../models/preferences';
import {delay, tryFetch} from './common';
import {mockedUserPreferences} from '../preferences/reducer';

const fetchUserPreferences = async (userid: string) => {
  let userPreferences: UserPreferences | undefined;
  const {res, err} = await tryFetch<UserPreferences>('Preferences API', `https://parla-api.groupe4.arla-sigl.fr/v1/preferences?=${userid}`)
  if (res) {
      userPreferences = res;
  }
  return {userPreferences, err};
};

export const getUserPreferences = (
  userid: string
): Observable<{userPreferences?: UserPreferences; err?: string}> => {

  return from(fetchUserPreferences(userid));
};
