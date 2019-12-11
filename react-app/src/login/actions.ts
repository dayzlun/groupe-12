import {Action} from 'redux';
import {User} from '../models/user';
import {Credentials} from '../state/store';

export const ON_SIGN_IN_ACTION = 'login#onSignIn';
export type OnSignInAction = Action & {
  credentials: Credentials;
};
export const onSignIn = (credentials: Credentials): OnSignInAction => ({
  type: ON_SIGN_IN_ACTION,
  credentials
});

export const ON_SIGN_IN_SUCCESS_ACTION = 'login#onSignInSuccess';
export type OnSignInSuccessAction = Action & {
  user: User;
};
export const onSignInSuccess = (user: User): OnSignInSuccessAction => ({
  type: ON_SIGN_IN_SUCCESS_ACTION,
  user
});

export const ON_SIGN_IN_FAILURE_ACTION = 'login#onSignInFailure';
export type OnSignInFailureAction = Action & {
  reason?: string;
};
export const onSignInFailure = (reason?: string): OnSignInFailureAction => ({
  type: ON_SIGN_IN_FAILURE_ACTION,
  ...(reason && {reason})
});

export type LoginActions = OnSignInAction | OnSignInSuccessAction | OnSignInFailureAction;
