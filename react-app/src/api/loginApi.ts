import {User} from '../models/user';
import {Credentials} from '../state/store';
import {testPassword, testUser, testUsername} from './common';

const validateTestCredentials = ({username, password}: Credentials) => {
  if (username === testUsername && password === testPassword) {
    return testUser;
  }
  return undefined;
};

export const validateUser = (credentials: Credentials) => {
  let user: User | undefined = undefined;
  try {
    // const response = await fetch(API_ENDPOINT + '/v1/users/validate');
    // await delay(2000);
    user = validateTestCredentials(credentials);
  } catch (err) {
    console.error('Error calling hiking api: ', err);
  }
  return user;
};
