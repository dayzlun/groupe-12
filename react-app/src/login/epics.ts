import {Epic, ofType} from 'redux-observable';
import {map} from 'rxjs/operators';
import {validateUser} from '../api/loginApi';
import {
  OnSignInAction,
  onSignInFailure,
  OnSignInFailureAction,
  onSignInSuccess,
  OnSignInSuccessAction,
  ON_SIGN_IN_ACTION
} from './actions';

const onSignInEpic: Epic = action$ =>
  action$.pipe(
    ofType(ON_SIGN_IN_ACTION),
    map<OnSignInAction, OnSignInFailureAction | OnSignInSuccessAction>(onSignIn => {
      const {credentials} = onSignIn;
      const maybeUser = validateUser(credentials);
      return maybeUser ? onSignInSuccess(maybeUser) : onSignInFailure('wrong credentials');
    })
  );

export const loginEpics = [onSignInEpic];
