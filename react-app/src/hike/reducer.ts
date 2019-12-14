import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {Hike} from '../models/hike';
import {
  HikesLoadedAction,
  HIKES_LOADED_ACTION,
  LOAD_HIKES_ACTION,
  HIKE_API_ERROR,
  HikeApiError
} from './actions';
import {map} from 'rxjs/operators';
import {ApiErrorState} from '../state/store';

export const mockedHikes: Hike[] = [
  {
    hikeid: '1',
    elevationGain: '120ft',
    name: 'Luther Burbank Park',
    coord: {
      lat: 124.5,
      lon: 123.6
    }
  },
  {
    hikeid: '2',
    elevationGain: '1800ft',
    name: 'Gem Lake',
    coord: {
      lat: 124.5,
      lon: 123.6
    }
  }
];

export type HikeState = ApiErrorState & {
  hikes: Hike[];
  loading: boolean;
};

export const initialHikeState: HikeState = {
  hikes: [],
  loading: false
};

export const hikeReducer: Reducer<HikeState, AnyActions> = (
  hikeState: HikeState | undefined,
  action: AnyActions
) => {
  if (!hikeState) return initialHikeState;
  switch (action.type) {
    case LOAD_HIKES_ACTION:
      return {
        ...hikeState,
        hikes: [],
        loading: true
      };
    case HIKES_LOADED_ACTION:
      const hikes = (action as HikesLoadedAction).hikes;
      return {
        ...hikeState,
        err: undefined,
        hikes,
        loading: false
      };
    case HIKE_API_ERROR:
      const apiError = (action as HikeApiError).err;
      return {
        ...hikeState,
        err: apiError,
        loading: false
      };
    default:
      return hikeState;
  }
};
