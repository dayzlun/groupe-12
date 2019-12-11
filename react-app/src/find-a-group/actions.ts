import {Action} from 'redux';
import { HikerGroup } from '../models/hiker-group';

export const LOAD_HIKER_GROUPS = 'hikerGroup#loadHikerGroups';
export type LoadHikerGroups = Action & {
}
export const loadHikerGroups = (): LoadHikerGroups => ({
   type: LOAD_HIKER_GROUPS
});

export const HIKER_GROUPS_LOADED = 'hikerGroup#hikerGroupsLoaded';
export type HikerGroupsLoaded = Action & {
    groups: HikerGroup[];
}
export const hikerGroupsLoaded = (groups: HikerGroup[]): HikerGroupsLoaded => ({
   type: HIKER_GROUPS_LOADED,
   groups
});

export type HikerGroupActions = LoadHikerGroups | HikerGroupsLoaded
