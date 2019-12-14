import {Action} from 'redux';
import {Hike} from '../models/hike';
import {ApiError} from '../state/store';

export const LOAD_RECOMMENDED_HIKES = 'recommendation#loadRecommendedHikes';
export type LoadRecommendedHikes = Action & {
  userid: string;
};
export const loadRecommendedHikes = (userid: string): LoadRecommendedHikes => ({
  type: LOAD_RECOMMENDED_HIKES,
  userid
});

export const RECOMMENDED_HIKES_LOADED = 'recommendation#recommendedHikesLoaded';
export type RecommendedHikesLoaded = Action & {
  hikes: Hike[];
};
export const recommendedHikesLoaded = (hikes: Hike[]): RecommendedHikesLoaded => ({
  type: RECOMMENDED_HIKES_LOADED,
  hikes
});

export const RECOMMENDATION_API_ERROR = 'recommendation#recommendationApiError';
export type RecommendationApiError = Action & ApiError;
export const recommendationApiError = (err: string): RecommendationApiError => ({
  type: RECOMMENDATION_API_ERROR,
  err
});

export type RecommendationActions =
  | LoadRecommendedHikes
  | RecommendedHikesLoaded
  | RecommendationApiError;
