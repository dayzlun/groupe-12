import {Action} from 'redux';
import {HikeRating} from '../models/hike-rating';
import { ApiError } from '../state/store';

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

export const RATING_API_ERROR = 'rating#ratingApiError';
export type RatingApiError = Action & ApiError;
export const ratingApiError = (err: string): RatingApiError => ({
   type: RATING_API_ERROR,
   err
});


export type RatingActions = LoadHikeRating | HikeRatingLoaded | RatingApiError;
