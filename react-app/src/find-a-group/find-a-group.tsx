import * as React from 'react';
import {
  makeStyles,
  createStyles,
  Container,
  Grid,
  Typography,
  Paper,
  Badge,
  Fab
} from '@material-ui/core';
import {containerStyle, paperStyle} from '../common-style';
import GroupIcon from '@material-ui/icons/Group';
import {AppState} from '../state/store';
import {useSelector, useDispatch} from 'react-redux';
import {HikerGroupState} from './reducer';
import {HikerGroup} from '../models/hiker-group';
import {LoadingPaperSkeleton} from '../common-components';
import {loadHikerGroups} from './actions';
import ReRollIcon from '@material-ui/icons/Casino';

const useStyles = makeStyles(theme =>
  createStyles({
    ...containerStyle(theme),
    ...paperStyle(theme)
  })
);

const HikerGroup: React.FC<{group: HikerGroup}> = ({group}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">{group.title}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Badge badgeContent={group.members.length} color="secondary">
            <GroupIcon fontSize="large" />
          </Badge>
          <Typography variant="body1">Members</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const FindAGroup: React.FC = () => {
  const classes = useStyles();
  const {groups, loading} = useSelector<AppState, HikerGroupState>(state => state.hikerGroup);
  const dispatch = useDispatch();
  // Load groups when component is mounting only.
  React.useEffect(() => {
    dispatch(loadHikerGroups());
  }, []);
  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h4">Find a group of Hiker</Typography>
          <Typography variant="subtitle1">based on your preferences</Typography>
        </Grid>
        <Grid item xs={4}>
          <Fab color="primary" onClick={() => dispatch(loadHikerGroups())}>
            <ReRollIcon fontSize="large" />
          </Fab>
          <Typography variant="body1" color="primary">
            Re-roll!
          </Typography>
        </Grid>
        {loading ? (
          <Grid item xs={12}>
            <LoadingPaperSkeleton />
          </Grid>
        ) : (
          groups.map((group, i) => (
            <Grid item xs={12} key={i}>
              <HikerGroup group={group} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};
