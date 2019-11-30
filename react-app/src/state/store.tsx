import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AnyActions} from '../actions';
import {AreaState, initialAreaState} from '../area/reducer';
import {CenterState, initialCenterState} from '../center/reducer';
import {HikerGroupState, initialHikerGroupState} from '../find-a-group/reducer';
import {HikeState, initialHikeState} from '../hike/reducer';
import {initialLoginState, LoginState} from '../login/reducer';
import {epics} from './epics';
import {reducers} from './reducers';
import {ForecastState, initialForecastState} from '../forecast/reducer';
import {CommentState, initialCommentState} from '../comment/reducer';
import {initialShopState, ShopState} from '../shop/reducer';
import {RecommendationState, initialRecommendationState} from '../recommendation/reducer';

export const enum LoginStep {
  userSignedOut = 'userSignedOut',
  credentialsSubmitted = 'credentialsSubmitted',
  validatingCredentials = 'validatingCredentials',
  failedSignIn = 'failedSignIn',
  userSignedIn = 'userSignedIn'
}

export type Credentials = {
  username: string;
  password: string;
};

export type AppState = {
  hike: HikeState;
  login: LoginState;
  center: CenterState;
  area: AreaState;
  hikerGroup: HikerGroupState;
  forecast: ForecastState;
  comment: CommentState;
  shop: ShopState;
  recommendation: RecommendationState;
};

export const initialState: AppState = {
  login: initialLoginState,
  hike: initialHikeState,
  center: initialCenterState,
  area: initialAreaState,
  hikerGroup: initialHikerGroupState,
  forecast: initialForecastState,
  comment: initialCommentState,
  shop: initialShopState,
  recommendation: initialRecommendationState
};

export const initStore = (middleware: any) => {
  const store = createStore<AppState, AnyActions, {}, {}>(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(middleware))
  );
  middleware.run(epics);
  return store;
};
