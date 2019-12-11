import {Area} from '../models/area';
import {AnyActions} from '../actions';
import {Reducer} from 'redux';
import {
  LOAD_AREA_OPTIONS_ACTION,
  AREA_OPTIONS_LOADED_ACTION,
  AreaOptionsLoaded,
  SELECT_AREA_OPTIONS,
  SelectAreaOptions
} from './actions';

export type AreaState = {
  options: Area[];
  selected: Area[];
  loading: boolean;
};

export const mockedAreas: Area[] = [{name: 'Washington Trails', areaid: 'wta'}];

export const initialAreaState: AreaState = {
  options: [],
  selected: [],
  loading: false
};

export const areaReducer: Reducer<AreaState, AnyActions> = (
  areaState: AreaState | undefined,
  action: AnyActions
) => {
  if (!areaState) return initialAreaState;
  switch (action.type) {
    case LOAD_AREA_OPTIONS_ACTION:
      return {
        ...areaState,
        loading: true
      };
    case SELECT_AREA_OPTIONS:
      const selected = (action as SelectAreaOptions).areas;
      return {
        ...areaState,
        selected
      };
    case AREA_OPTIONS_LOADED_ACTION:
      const areaOptions = (action as AreaOptionsLoaded).areas;
      return {
        ...areaState,
        options: areaOptions,
        loading: false
      };
    default:
      return areaState;
  }
};
