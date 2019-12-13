import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {HIKE_RATING_LOADED, HikeRatingLoaded} from './actions';
import {HikeRating} from '../models/hike-rating';

export type RatingState = {
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
    default:
      return ratingState;
  }
};
