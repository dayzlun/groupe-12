import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {PointOfInterest, POILabel} from '../models/point-of-interest';
import {
  LOAD_POINTS_OF_INTERESTS,
  POINTS_OF_INTEREST_LOADED,
  PointsOfInterestLoaded,
  POI_API_ERROR,
  PoiApiError
} from './actions';
import {poiEpics} from './epics';
import { ApiErrorState } from '../state/store';

export type POIState = ApiErrorState & {
  pois: PointOfInterest[];
  loading: boolean;
};

export const initialPOIState: POIState = {
  pois: [],
  loading: false
};

export const mockedPointsOfInterest: PointOfInterest[] = [
  {
    poiid: '1',
    label: POILabel.restaurant,
    name: "Snack'n'hike",
    coord: {lat: 92.0, lon: 14.2}
  },
  {
    poiid: '2',
    label: POILabel.toilet,
    name: 'Public bathroom',
    coord: {lat: 92.14, lon: 14.223}
  },
  {
    poiid: '3',
    label: POILabel.waterFountain,
    name: "Water fountain",
    coord: {lat: 92.14, lon: 14.2223}
  }
];

export const poiReducer: Reducer<POIState, AnyActions> = (
  poiState: POIState | undefined,
  action: AnyActions
) => {
  if (!poiState) return initialPOIState;
  switch (action.type) {
    case LOAD_POINTS_OF_INTERESTS:
      return {
        ...poiState,
        loading: true,
        pois: []
      };
    case POINTS_OF_INTEREST_LOADED:
      const pois = (action as PointsOfInterestLoaded).pois;
      return {
        ...poiState,
        loading: false,
        pois
      };
    case POI_API_ERROR:
      return {
        ...poiState,
        loading: false,
        err: (action as PoiApiError).err
      }
    default:
      return poiState;
  }
};
