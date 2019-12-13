import {LocationCoordinates} from './hike';

export const enum POILabel {
  restaurant = 'restaurant',
  toilet = 'toilet',
  waterFountain = 'water-fountain'
}

export type PointOfInterest = {
  poiid: string;
  name: string;
  label: POILabel;
  coord: LocationCoordinates;
};
