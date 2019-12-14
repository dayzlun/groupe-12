import {Credentials} from '../state/store';

export const delay = async (delayInMs: number): Promise<number> =>
  new Promise(resolve => setTimeout(resolve, delayInMs));

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
