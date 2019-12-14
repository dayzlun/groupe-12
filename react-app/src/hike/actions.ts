import {Action} from 'redux';
import {Hike} from '../models/hike';
import {Area} from '../models/area';
import { ApiError } from '../state/store';

export const LOAD_HIKES_ACTION = 'hikes#loadHikes';
export type LoadHikesAction = Action & {
  areaid: string;
};
export const loadHikes = (areaid: string): LoadHikesAction => ({
  type: LOAD_HIKES_ACTION,
  areaid
});

export const HIKES_LOADED_ACTION = 'hikes#hikesLoaded';
export type HikesLoadedAction = Action & {
  hikes: Hike[];
};
export const hikesLoaded = (hikes: Hike[]): HikesLoadedAction => ({
  type: HIKES_LOADED_ACTION,
  hikes
});

export const HIKE_API_ERROR = 'hikes#hikeApiError';
export type HikeApiError = Action & ApiError;

export const hikeApiError = (err: string): HikeApiError => ({
   type: HIKE_API_ERROR,
   err
});


export type HikeActions = LoadHikesAction | HikesLoadedAction;
