import {Credentials} from '../state/store';
export const HIKE_API_ENDPOINT = 'http://localhost:3000';

export const delay = async (delayInMs: number): Promise<number> =>
  new Promise(resolve => setTimeout(resolve, delayInMs));

export const tryFetch = async <R>(apiName: string, fetchUrl: string): Promise<{res?: R; err?: string}> => {
  let res: R | undefined;
  let err: string | undefined; 
  try {
    const response = await fetch(fetchUrl);
    if (response.status >= 200 && response.status < 300) res = await response.json();
    else err = `${apiName} returned an error`; // e.g. 'Hikes API returned an error';
  } catch (e) {
    console.log(`Error fetching ${apiName}: `, e);
    err = `${apiName} unavailable!`;
  } finally {
    return {res, err};
  }
}

export const testUsername = 'walter';
export const testPassword = 'walter';

export const testCredentials: Credentials = {
  username: testUsername,
  password: testPassword
};
export const testUser = {
  username: testUsername,
  userid: '1'
};
