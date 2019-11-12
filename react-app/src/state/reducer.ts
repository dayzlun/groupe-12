import * as React from 'react';
import {AppState} from './store';
import {AnyActions, LOAD_HIKES_ACTION, HIKES_LOADED_ACTION, HikesLoadedAction} from '../actions';
/**
 * Apply changes to the application state, based on which
 * action has been dispatched.
 *
 * @param appState the current application state
 * @param action the action that has been dispatched
 */
export const reducer: React.Reducer<AppState, AnyActions> = (
  appState: AppState,
  action: AnyActions
) => {
  console.log('State changing triggered by action of type ', action.type);
  switch (action.type) {
    case LOAD_HIKES_ACTION:
      return {
        ...appState,
        hikes: []
      };
    case HIKES_LOADED_ACTION:
      return {
        ...appState,
        hikes: (action as HikesLoadedAction).hikes // `as` is only to tell explicitly the type to typescript compiler
      };
    default:
      console.warn('No cases handled for action ', action.type, ' check your reducer.');
      return appState;
  }
};
