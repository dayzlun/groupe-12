import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {Hike} from '../models/hike';
import {
  LOAD_RECOMMENDED_HIKES,
  RECOMMENDED_HIKES_LOADED,
  RecommendedHikesLoaded,
  RecommendationApiError,
  RECOMMENDATION_API_ERROR
} from './actions';
import {mockedHikes} from '../hike/reducer';
import {ApiErrorState} from '../state/store';

export type RecommendationState = ApiErrorState & {
  hikes: Hike[];
  loading: boolean;
};

export const initialRecommendationState: RecommendationState = {
  hikes: [],
  loading: false
};

export const mockedRecommendedHikes: Hike[] = mockedHikes;

export const recommendationReducer: Reducer<RecommendationState, AnyActions> = (
  recommendationState: RecommendationState | undefined,
  action: AnyActions
) => {
  if (!recommendationState) return initialRecommendationState;
  switch (action.type) {
    case LOAD_RECOMMENDED_HIKES:
      return {
        ...recommendationState,
        loading: true,
        hikes: []
      };
    case RECOMMENDED_HIKES_LOADED:
      const hikes = (action as RecommendedHikesLoaded).hikes;
      return {
        ...recommendationState,
        loading: false,
        hikes
      };
    case RECOMMENDATION_API_ERROR:
      return {
        ...recommendationState,
        loading: false,
        err: (action as RecommendationApiError).err
      };
    default:
      return recommendationState;
  }
};
