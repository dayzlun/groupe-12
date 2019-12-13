import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {
  SWITCH_VIEW_ACTION,
  SwitchViewAction,
  SWITCH_TO_HIKE_DETAIL,
  SwtichToHikeDetails,
  SWITCH_TO_HIKE_COMMENTS,
  SwitchToHikeComments
} from './actions';
import {Hike} from '../models/hike';

export type CenterState = {
  view: {
    selected: CenterView;
    selectedHike?: Hike;
    selectedHikeForComment?: Hike;
  };
};

export const enum CenterView {
  hikeView = 'hikeView',
  preferencesView = 'preferencesView',
  findGroupView = 'findGroupView',
  addAHikeView = 'addAHikeView',
  recommendationView = 'recommendationView',
  shopView = 'shopView',
  hikeDetailView = 'HikeDetailView',
  recommendedHikeDetailView = 'RecommendedHikeDetailView',
  hikeCommentsView = 'HikeCommentsView',
  recommendedHikeCommentsView = 'RecommendedHikeCommentsView',
  statisticsView = 'StatisticsView'
}

export const initialCenterState: CenterState = {
  view: {
    selected: CenterView.hikeView
  }
};

export const centerReducer: Reducer<CenterState, AnyActions> = (
  centerState: CenterState | undefined,
  action: AnyActions
): CenterState => {
  if (!centerState) return initialCenterState;
  switch (action.type) {
    case SWITCH_VIEW_ACTION:
      let selectedView = (action as SwitchViewAction).view;
      return {
        ...centerState,
        view: {
          selected: selectedView
        }
      };
    case SWITCH_TO_HIKE_DETAIL:
      const {hike: hikeForDetails, detailsView} = action as SwtichToHikeDetails;
      return {
        ...centerState,
        view: {
          ...centerState.view,
          selected: detailsView,
          selectedHike: hikeForDetails
        }
      };
    case SWITCH_TO_HIKE_COMMENTS:
      const {hike: hikeForComment, commentsView} = action as SwitchToHikeComments;
      return {
        ...centerState,
        view: {
          ...centerState.view,
          selected: commentsView,
          selectedHikeForComment: hikeForComment
        }
      };
    default:
      return centerState;
  }
};
