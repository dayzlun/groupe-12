import * as React from 'react';
import {Theme, createStyles, Paper, Grid, Typography, Tabs, Tab, Avatar} from '@material-ui/core';
import DurationIcon from '@material-ui/icons/AccessTime';
import {makeStyles} from '@material-ui/styles';
import {paperStyle} from '../common-style';
import {DurationWalked} from '../models/statistics';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../state/store';
import {StatisticsState} from './reducer';
import {LoadingPaperSkeleton} from '../common-components';
import {loadUserDurationWalked} from './actions';
import {AwardIconMap} from './helper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...paperStyle(theme),
    tabBar: {
      flexGrow: 1
    }
  })
);

export const DurationWalkedSince: React.FC<{walked: DurationWalked}> = ({walked}) => (
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
      <Typography variant="body1" component="p" align='center'>
        You've walked {walked.duration} hours
      </Typography>
    </Grid>
  </Grid>
);

export const DurationWalkedByUser: React.FC<{userid: string}> = ({userid}) => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const {userDurationWalked, loadingDuration} = useSelector<AppState, StatisticsState>(
    state => state.statistics
  );
  const dispatch = useDispatch();
  // Loading stats when component is mounting only
  React.useEffect(() => {
    dispatch(loadUserDurationWalked(userid));
  }, []);
  let tabContent = <></>;
  switch (selectedTab) {
    case 0:
      tabContent = userDurationWalked ? (
        <DurationWalkedSince walked={userDurationWalked.lastMonth} />
      ) : (
        <Typography variant="body1">No duration data</Typography>
      );
      break;
    case 1:
      tabContent = userDurationWalked ? (
        <DurationWalkedSince walked={userDurationWalked.allTime} />
      ) : (
        <Typography variant="body1">No duration data</Typography>
      );
      break;
    default:
      tabContent = <Typography variant="body1">No data</Typography>;
  }
  return loadingDuration ? (
    <LoadingPaperSkeleton />
  ) : (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <DurationIcon color="secondary" fontSize="large" />
          <Typography variant="body1">Hours of walking</Typography>
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
