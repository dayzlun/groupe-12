import * as React from 'react';
import {Theme, createStyles, Paper, Grid, Typography, Tabs, Tab} from '@material-ui/core';
import DistanceIcon from '@material-ui/icons/DirectionsWalk';
import {makeStyles} from '@material-ui/styles';
import {paperStyle} from '../common-style';
import {DistanceWalked} from '../models/statistics';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../state/store';
import {StatisticsState} from './reducer';
import {LoadingPaperSkeleton, ErrorPaper} from '../common-components';
import {loadUserDistanceWalked} from './actions';
import {AwardIconMap} from './helper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...paperStyle(theme),
    tabBar: {
      flexGrow: 1
    }
  })
);

export const DistanceWalkedSince: React.FC<{walked: DistanceWalked}> = ({walked}) => (
  <Grid container>
    <Grid item xs={3}>
      <Typography align="center" variant="h6">
        Rank
      </Typography>
      <div style={{textAlign: 'center'}}>
        <object width="72px" height="72px" type="image/svg+xml" data={AwardIconMap[walked.award]} />
      </div>
      <Typography align="center" variant="h6">
        {walked.award}
      </Typography>
    </Grid>
    <Grid item xs={8}>
      <Typography variant="body1" component="p" align="center">
        You've walked {walked.distance} km
      </Typography>
    </Grid>
  </Grid>
);

export const DistanceWalkedByUser: React.FC<{userid: string}> = ({userid}) => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const {userDistanceWalked, loadingDistance, distanceApiError} = useSelector<
    AppState,
    StatisticsState
  >(state => state.statistics);
  const dispatch = useDispatch();
  // Loading stats when component is mounting only
  React.useEffect(() => {
    dispatch(loadUserDistanceWalked(userid));
  }, []);

  let tabContent = <></>;
  switch (selectedTab) {
    case 0:
      tabContent = userDistanceWalked ? (
        <DistanceWalkedSince walked={userDistanceWalked.lastMonth} />
      ) : (
        <Typography variant="body1">No distance data</Typography>
      );
      break;
    case 1:
      tabContent = userDistanceWalked ? (
        <DistanceWalkedSince walked={userDistanceWalked.allTime} />
      ) : (
        <Typography variant="body1">No distance data</Typography>
      );
      break;
    default:
      tabContent = <Typography variant="body1">No data</Typography>;
  }
  return loadingDistance ? (
    <LoadingPaperSkeleton />
  ) : distanceApiError || !userDistanceWalked ? (
    <ErrorPaper err={distanceApiError || 'Unkown'} />
  ) : (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <DistanceIcon color="secondary" fontSize="large" />
          <Typography variant="body1">Distance walked</Typography>
        </Grid>
        <Grid item xs={9}>
          <Tabs
            value={selectedTab}
            onChange={(e, v) => setSelectedTab(v)}
            centered
            textColor="secondary"
          >
            <Tab label="Last month" />
            <Tab label="All time" />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          {tabContent}
        </Grid>
      </Grid>
    </Paper>
  );
};
