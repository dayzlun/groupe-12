/**
 * Your hike model. Should be sync with the model
 * return from your hike API
 */
export type Hike = {
  hikeid: string;
  name: string;
  elevationGain: string;
  coord: LocationCoordinates;
};

export type LocationCoordinates = {
  lat: number;
  lon: number;
};
