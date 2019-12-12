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
/**
 * This is where you should define your actions:
 *  - its name (this will be use in the `case` clause of the reducer)
 *  - its type (if we expect to have extra information)
 *  - the function called by `displatch`
 *  You should define those 3 elements to create a new action
 */

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
  | POIActions;
