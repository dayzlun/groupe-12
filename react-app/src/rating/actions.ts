import {Action} from 'redux';
import {HikeRating} from '../models/hike-rating';

export const LOAD_HIKE_RATING = 'rating#loadHikeRating';
export type LoadHikeRating = Action & {
  hikeid: string;
};
export const loadHikeRating = (hikeid: string): LoadHikeRating => ({
  type: LOAD_HIKE_RATING,
  hikeid
});

export const HIKE_RATING_LOADED = 'rating#hikeRatingLoaded';
export type HikeRatingLoaded = Action & {
  hikeRating: HikeRating;
};
export const hikeRatingLoaded = (hikeRating: HikeRating): HikeRatingLoaded => ({
  type: HIKE_RATING_LOADED,
  hikeRating
});

export type RatingActions = LoadHikeRating | HikeRatingLoaded;
