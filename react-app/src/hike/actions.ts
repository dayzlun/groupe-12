import {Action} from 'redux';
import {Hike} from '../models/hike';
import {Area} from '../models/area';

export const LOAD_HIKES_ACTION = 'hikes#loadHikes';
export type LoadHikesAction = Action & {
  areas: Area[];
};
export const loadHikes = (areas: Area[]): LoadHikesAction => ({
  type: LOAD_HIKES_ACTION,
  areas
});

export const HIKES_LOADED_ACTION = 'hikes#hikesLoaded';
export type HikesLoadedAction = Action & {
  hikes: Hike[];
};
export const hikesLoaded = (hikes: Hike[]): HikesLoadedAction => ({
  type: HIKES_LOADED_ACTION,
  hikes
});

export type HikeActions = LoadHikesAction | HikesLoadedAction;
