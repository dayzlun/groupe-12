import React from 'react';
import {AnyActions, hikesLoaded, loadHikes} from '../actions';
import {fetchHikes} from '../api/hikesApi';

export const loadHikesFromApi = async (dispatch: React.Dispatch<AnyActions>) => {
  // changing app state when we are fetching the hikes
  // You can think of setting a loading spinner while user
  // waits for the API call to finish
  dispatch(loadHikes());
  const hikes = await fetchHikes();
  // changing app state when we have the returned hikes from the API
  dispatch(hikesLoaded(hikes));
};
