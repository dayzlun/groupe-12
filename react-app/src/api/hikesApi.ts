import {API_ENDPOINT} from './common';
import {Hike} from '../models/hike';

export const fetchHikes = async () => {
  let hikes: Hike[] = [];
  try {
    const response = await fetch(API_ENDPOINT + '/hiking/all');
    hikes = await response.json();
  } catch (err) {
    console.error('Error calling hiking api: ', err);
  }
  return hikes;
};
