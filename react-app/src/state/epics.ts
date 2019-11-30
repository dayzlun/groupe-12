import {combineEpics} from 'redux-observable';
import {loginEpics} from '../login/epics';
import {hikeEpics} from '../hike/epics';
import {areaEpics} from '../area/epics';
import {hikerGroupEpics} from '../find-a-group/epics';
import {forecastEpics} from '../forecast/epics';
import {commentEpics} from '../comment/epics';
import {shopEpics} from '../shop/epics';
import {recommendationEpics} from '../recommendation/epics';

export const epics = combineEpics(
  ...loginEpics,
  ...hikeEpics,
  ...areaEpics,
  ...hikerGroupEpics,
  ...forecastEpics,
  ...commentEpics,
  ...shopEpics,
  ...recommendationEpics
);
