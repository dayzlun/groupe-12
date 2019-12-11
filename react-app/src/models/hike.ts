/**
 * Your hike model. Should be sync with the model
 * return from your hike API
 */
export type Hike = {
  hikeid: string;
  name: string;
  elevationGain: string;
  coord: HikeCoordinates;
};

export type HikeCoordinates = {
  lat: number;
  lon: number;
};
