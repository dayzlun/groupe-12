import {HikeActions} from './hike/actions';
import {LoginActions} from './login/actions';
import {AreaActions} from './area/actions';
import {CenterActions} from './center/actions';
import {ForecastActions} from './forecast/actions';
import {CommentActions} from './comment/actions';
import {HikerGroupActions} from './find-a-group/actions';
import {ShopActions} from './shop/actions';
import {RecommendationActions} from './recommendation/actions';
import {POIActions} from './poi/actions';
import {StatisticsActions} from './statistics/actions';
import {PreferencesActions} from './preferences/actions';
import {RatingActions} from './rating/actions';

export type AnyActions =
  | LoginActions
  | HikeActions
  | AreaActions
  | CenterActions
  | HikerGroupActions
  | ForecastActions
  | CommentActions
  | ShopActions
  | RecommendationActions
  | POIActions
  | StatisticsActions
  | PreferencesActions
  | RatingActions;
