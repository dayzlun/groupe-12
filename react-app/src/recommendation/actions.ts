import {Action} from 'redux';
import {Hike} from '../models/hike';

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

export type RecommendationActions = LoadRecommendedHikes | RecommendedHikesLoaded;
