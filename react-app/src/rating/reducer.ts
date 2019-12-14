import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {HIKE_RATING_LOADED, HikeRatingLoaded, RATING_API_ERROR, RatingApiError} from './actions';
import {HikeRating} from '../models/hike-rating';
import {ApiErrorState} from '../state/store';

export type RatingState = ApiErrorState & {
  hikeRatings: HikeRating[];
};

export const initialRatingState: RatingState = {
  hikeRatings: []
};

export const ratingReducer: Reducer<RatingState, AnyActions> = (
  ratingState: RatingState | undefined,
  action: AnyActions
) => {
  if (!ratingState) return initialRatingState;
  switch (action.type) {
    case HIKE_RATING_LOADED:
      return {
        ...ratingState,
        hikeRatings: [...ratingState.hikeRatings, (action as HikeRatingLoaded).hikeRating]
      };
    case RATING_API_ERROR:
      return {
        ...ratingState,
        err: (action as RatingApiError).err
      };
    default:
      return ratingState;
  }
};
