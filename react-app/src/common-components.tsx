import * as React from 'react';
import clsx from 'clsx';
import {paperStyle} from './common-style';
import {makeStyles, Theme, createStyles, Paper, Card, Box, Typography} from '@material-ui/core';
import {Skeleton} from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      ...paperStyle(theme).paper,
      width: '100%'
    },
    alert: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    }
  })
);

export const LoadingPaperSkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
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

export const ErrorPaper: React.FC<{err: string}> = ({err}) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.paper, classes.alert)}>
      <Typography variant='h4'>API error</Typography>
      <br />
      <Typography variant="subtitle1" component="b">
        {err}
      </Typography>
    </Paper>
  );
};
