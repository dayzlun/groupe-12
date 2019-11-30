import * as React from 'react';
import {Box, Typography} from '@material-ui/core';
import {Rating} from '@material-ui/lab';

export type RatingProps = {
  hikeId: string;
};

export const HikeRating: React.FC<RatingProps> = ({hikeId}) => {
  const [rating, setRating] = React.useState(0);
  
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Rate this hike!</Typography>
      <Rating
        key={hikeId}
        name={hikeId}
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
      />
    </Box>
  );
};
