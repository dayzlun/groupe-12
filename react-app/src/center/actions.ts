import {Action} from 'redux';
import {CenterView} from './reducer';
import {Hike} from '../models/hike';

export const SWITCH_VIEW_ACTION = 'center#switchView';
export type SwitchViewAction = Action & {
  view: CenterView;
};
export const switchView = (view: CenterView): SwitchViewAction => ({
  type: SWITCH_VIEW_ACTION,
  view
});

export const SWITCH_TO_HIKE_DETAIL = 'hikes#switchToHikeDetails';
export type SwtichToHikeDetails = Action & {
  hike: Hike;
  detailsView: CenterView;
};
export const switchToHikeDetails = (hike: Hike, detailsView: CenterView): SwtichToHikeDetails => ({
  type: SWITCH_TO_HIKE_DETAIL,
  hike,
  detailsView
});

export const SWITCH_TO_HIKE_COMMENTS = 'center#switchToHikeComments';
export type SwitchToHikeComments = Action & {
  hike: Hike;
  commentsView: CenterView;
};
export const switchToHikeComments = (hike: Hike, commentsView: CenterView): SwitchToHikeComments => ({
  type: SWITCH_TO_HIKE_COMMENTS,
  hike,
  commentsView
});

export type CenterActions = SwitchViewAction | SwtichToHikeDetails | SwitchToHikeComments;
