import {combineReducers, Reducer} from 'redux';
import {AnyActions} from '../actions';
import {hikeReducer} from '../hike/reducer';
import {loginReducer} from '../login/reducer';
import {centerReducer} from '../center/reducer';
import {areaReducer} from '../area/reducer';
import {AppState, initialState} from './store';
import {hikerGroupReducer} from '../find-a-group/reducer';
import {forecastReducer} from '../forecast/reducer';
import {commentReducer} from '../comment/reducer';
import {shopReducer} from '../shop/reducer';
import { recommendationReducer } from '../recommendation/reducer';
import { poiReducer } from '../poi/reducer';

/**
 * Apply changes to the application state, based on which
 * action has been dispatched.
 *
 * @param appState the current application state
 * @param action the action that has been dispatched
 */
export const reducers: Reducer<AppState, AnyActions> = (
  appState: AppState | undefined,
  action: AnyActions
) => {
  if (!appState) return initialState;
  const appReducers = combineReducers<AppState>({
    login: loginReducer,
    hike: hikeReducer,
    center: centerReducer,
    area: areaReducer,
    hikerGroup: hikerGroupReducer,
    forecast: forecastReducer,
    comment: commentReducer,
    shop: shopReducer,
    recommendation: recommendationReducer,
    poi: poiReducer
  });
  return appReducers(appState, action);
};
