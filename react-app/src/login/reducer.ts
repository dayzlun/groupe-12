import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {User} from '../models/user';
import {Credentials, LoginStep} from '../state/store';
import {
  OnSignInAction,
  OnSignInFailureAction,
  OnSignInSuccessAction,
  ON_SIGN_IN_ACTION,
  ON_SIGN_IN_FAILURE_ACTION,
  ON_SIGN_IN_SUCCESS_ACTION
} from './actions';

export type LoginState = {
  userSession: {
    loginStep: LoginStep;
    user?: User;
    credentials?: Credentials;
    error?: string;
  };
};

export const initialLoginState: LoginState = {
  userSession: {
    loginStep: LoginStep.userSignedOut
  }
}

export const loginReducer: Reducer<LoginState, AnyActions> = (
  loginState: LoginState | undefined,
  action: AnyActions
): LoginState => {
  if (!loginState) 
    return initialLoginState;
  switch (action.type) {
    case ON_SIGN_IN_FAILURE_ACTION:
      let {reason} = action as OnSignInFailureAction;
      return {
        ...loginState,
        userSession: {
          ...loginState.userSession,
          loginStep: LoginStep.failedSignIn,
          ...(reason && {error: reason})
        }
      };
    case ON_SIGN_IN_SUCCESS_ACTION:
      let {user} = action as OnSignInSuccessAction;
      return {
        ...loginState,
        userSession: {
          ...loginState.userSession,
          loginStep: LoginStep.userSignedIn,
          user
        }
      };
    case ON_SIGN_IN_ACTION:
      return {
        ...loginState,
        userSession: {
          ...loginState.userSession,
          loginStep: LoginStep.validatingCredentials
        }
      };
    default:
      return loginState;
  }
};
