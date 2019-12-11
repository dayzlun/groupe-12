import * as React from 'react';
import {paperStyle} from './common-style';
import {makeStyles, Theme, createStyles, Paper, Card, Box} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...paperStyle(theme)
  })
);

export const LoadingPaperSkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} style={{width: '100%'}}>
      <Skeleton height={50} variant="text" width="100%" />
      <Skeleton height={50} variant="text" width="100%" />
    </Paper>
  );
};

export const LoadingCardSkeleton: React.FC = () => {
  const classes = useStyles();
  return (
    <Box width={210} marginRight={0.5} my={5}>
      <Skeleton variant="rect" width={210} height={118} />
      <Box pt={0.5}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
};
