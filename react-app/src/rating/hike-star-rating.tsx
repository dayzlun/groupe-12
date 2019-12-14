import * as React from 'react';
import {Box, Typography} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../state/store';
import {HikeRating} from '../models/hike-rating';
import {loadHikeRating} from './actions';
import {RatingState} from './reducer';

export type RatingProps = {
  hikeId: string;
};

export const HikeStarRating: React.FC<RatingProps> = ({hikeId}) => {
  const {hikeRatings, err} = useSelector<AppState, RatingState>(state => state.rating);
  const rating = hikeRatings.find(rating => rating.hikeid === hikeId);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadHikeRating(hikeId));
  }, []);
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      {err ? (
        <Typography component="legend" color="primary">
          {err}
        </Typography>
      ) : rating ? (
        <>
          <Typography component="legend">Rated from {rating.numberOfRaters} hikers</Typography>
          <Rating key={hikeId} name={hikeId} value={rating.rating} readOnly />
        </>
      ) : (
        <Typography component="legend">No rating</Typography>
      )}
    </Box>
  );
};
