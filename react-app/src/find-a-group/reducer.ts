import {HikerGroup} from '../models/hiker-group';
import {AnyActions} from '../actions';
import {Reducer} from 'redux';
import {LOAD_HIKER_GROUPS, HIKER_GROUPS_LOADED, HikerGroupsLoaded} from './actions';
import { testUser } from '../api/common';

export type HikerGroupState = {
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
    default:
      return hikerGroupState;
  }
};
