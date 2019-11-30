import {Action} from 'redux';
import {Area} from '../models/area';

export const LOAD_AREA_OPTIONS_ACTION = 'hikes#loadAreas';
export type LoadAreasOptions = Action & {};
export const loadAreas = (): LoadAreasOptions => ({
  type: LOAD_AREA_OPTIONS_ACTION
});

export const SELECT_AREA_OPTIONS = 'area#selectAreaOptions';
export type SelectAreaOptions = Action & {
  areas: Area[];
};
export const selectAreaOptions = (areas: Area[]): SelectAreaOptions => ({
  type: SELECT_AREA_OPTIONS,
  areas
});

export const AREA_OPTIONS_LOADED_ACTION = 'hike#areaLoaded';
export type AreaOptionsLoaded = Action & {
  areas: Area[];
};
export const areaLoaded = (areas: Area[]): AreaOptionsLoaded => ({
  type: AREA_OPTIONS_LOADED_ACTION,
  areas
});

export type AreaActions = LoadAreasOptions | AreaOptionsLoaded | SelectAreaOptions;
