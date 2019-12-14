import {Action} from 'redux';
import {HikerGroup} from '../models/hiker-group';
import {ApiError} from '../state/store';

export const LOAD_HIKER_GROUPS = 'hikerGroup#loadHikerGroups';
export type LoadHikerGroups = Action & {};
export const loadHikerGroups = (): LoadHikerGroups => ({
  type: LOAD_HIKER_GROUPS
});

export const HIKER_GROUPS_LOADED = 'hikerGroup#hikerGroupsLoaded';
export type HikerGroupsLoaded = Action & {
  groups: HikerGroup[];
};
export const hikerGroupsLoaded = (groups: HikerGroup[]): HikerGroupsLoaded => ({
  type: HIKER_GROUPS_LOADED,
  groups
});

export const HIKER_GROUP_API_ERROR = 'hikerGroup#hikerGroupApiError';
export type HikerGroupApiError = Action & ApiError;
export const hikerGroupApiError = (err: string): HikerGroupApiError => ({
  type: HIKER_GROUP_API_ERROR,
  err
});

export type HikerGroupActions = LoadHikerGroups | HikerGroupsLoaded | HikerGroupApiError;
