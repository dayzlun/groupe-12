import {HikerGroup} from '../models/hiker-group';
import {AnyActions} from '../actions';
import {Reducer} from 'redux';
import {LOAD_HIKER_GROUPS, HIKER_GROUPS_LOADED, HikerGroupsLoaded, HikerGroupApiError, HIKER_GROUP_API_ERROR} from './actions';
import { testUser } from '../api/common';
import { ApiErrorState } from '../state/store';

export type HikerGroupState = ApiErrorState & {
  groups: HikerGroup[];
  loading: boolean;
};

export const initialHikerGroupState: HikerGroupState = {
  groups: [],
  loading: false
};

export const mockedHikerGroups: HikerGroup[] = [
  {groupid: 'lobolwsky', title: 'You\'re entering a wall of pain...', members: [testUser]},
  {groupid: 'weekend-hikers', title: 'Wonderers friendly club', members: [testUser, testUser, testUser]}
]


export const hikerGroupReducer: Reducer<HikerGroupState, AnyActions> = (
  hikerGroupState: HikerGroupState | undefined,
  action: AnyActions
) => {
  if (!hikerGroupState) return initialHikerGroupState;
  switch (action.type) {
    case LOAD_HIKER_GROUPS:
      return {
        ...hikerGroupState,
        groups: [],
        loading: true
      };
    case HIKER_GROUPS_LOADED:
      return {
        ...hikerGroupState,
        groups: (action as HikerGroupsLoaded).groups,
        loading: false
      };
    case HIKER_GROUP_API_ERROR:
      return {
        ...hikerGroupState,
        loading: false,
        err: (action as HikerGroupApiError).err
      }
    default:
      return hikerGroupState;
  }
};
