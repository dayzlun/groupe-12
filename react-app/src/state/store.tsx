import * as React from 'react';
import {Hike} from '../models/hike';
import {AnyActions} from '../actions';

export type AppState = {
  hikes: Hike[];
};

export const initialState: AppState = {
  hikes: []
};

/**
 * Initialize a new application context, with the given initial state and reducer
 * @param reducer function that determines what changes are applied for which actions
 * @param initialState the initial state of the app; when the user just arrived on our app.
 */
export const createStore = (reducer: React.Reducer<AppState, AnyActions>, initialState: AppState) => {
  
  const AppContext = React.createContext<{state: AppState; dispatch: React.Dispatch<AnyActions>}>({
    state: initialState,
    dispatch: () => {}
  });

  const StateProvider: React.FC = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;
  };

  const useAppState = (): [AppState, (action: AnyActions) => void] => {
    const {state, dispatch} = React.useContext(AppContext);
    return [state, dispatch];
  };

  return {StateProvider, useAppState};
};
