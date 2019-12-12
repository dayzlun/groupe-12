import {Action} from 'redux';
import {PointOfInterest} from '../models/point-of-interest';

export const LOAD_POINTS_OF_INTERESTS = 'poi#loadPointsOfInterest';
export type LoadPointsOfInterest = Action & {
  hikeid: string;
};
export const loadPointsOfInterest = (hikeid: string): LoadPointsOfInterest => ({
  type: LOAD_POINTS_OF_INTERESTS,
  hikeid
});

export const POINTS_OF_INTEREST_LOADED = 'poi#pointsOfInterestLoaded';
export type PointsOfInterestLoaded = Action & {
  pois: PointOfInterest[];
};
export const pointsOfInterestLoaded = (pois: PointOfInterest[]): PointsOfInterestLoaded => ({
  type: POINTS_OF_INTEREST_LOADED,
  pois
});

export type POIActions = LoadPointsOfInterest | PointsOfInterestLoaded;