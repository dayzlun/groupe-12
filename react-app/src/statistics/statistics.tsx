import * as React from 'react';
import {Theme, createStyles, Container, Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {containerStyle, paperStyle} from '../common-style';
import {DistanceWalkedByUser} from './distance-walked';
import {useSelector} from 'react-redux';
import {AppState} from '../state/store';
import {User} from '../models/user';
import {DurationWalkedByUser} from './duration-walked';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...containerStyle(theme),
    ...paperStyle(theme)
  })
);

export const Statistics: React.FC = () => {
  const classes = useStyles();
  const user = useSelector<AppState, User | undefined>(state => state.login.userSession.user);

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Your hiking statistics</Typography>
          <Typography variant="subtitle1">Keep up the good work!</Typography>
        </Grid>
        <Grid item xs={6}>
          {user ? <DistanceWalkedByUser userid={user.userid} /> : <h1>User not found</h1>}
        </Grid>
        <Grid item xs={6}>
          {user ? <DurationWalkedByUser userid={user.userid} /> : <h1>User not found</h1>}
        </Grid>
      </Grid>
    </Container>
  );
};
