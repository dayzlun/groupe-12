import {Hike} from './models/hike';
/**
 * This is where you should define your actions:
 *  - its name (this will be use in the `case` clause of the reducer)
 *  - its type (if we expect to have extra information)
 *  - the function called by `displatch`
 *  You should define those 3 elements to create a new action
 */


type Action = {
    type: string;
}

export const LOAD_HIKES_ACTION = 'hikes#loadHikes';
export type LoadHikesAction = Action & {}
export const loadHikes = (): LoadHikesAction => ({
  type: LOAD_HIKES_ACTION
});


export const HIKES_LOADED_ACTION = 'hikes#hikesLoaded';
export type HikesLoadedAction = Action & {
  hikes: Hike[];
}
export const hikesLoaded = (hikes: Hike[]): HikesLoadedAction => ({
  type: HIKES_LOADED_ACTION,
  hikes
});

export type AnyActions = 
    | LoadHikesAction 
    | HikesLoadedAction;