import * as React from 'react';
import {AppState} from '../state/store';
import {Login} from '../login/login';
import {useSelector} from 'react-redux';
import { User } from '../models/user';

export const Authenticated: React.FC = ({children}) => {
  const user = useSelector<AppState, User | undefined>(state => state.login.userSession.user);

  if (user) {
    return <>{children}</>;
  } else {
    return <Login />;
  }
};
