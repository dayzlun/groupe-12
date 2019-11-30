import * as React from 'react';
import {Container, makeStyles, Theme, createStyles, Grid, Typography} from '@material-ui/core';
import {containerStyle} from '../common-style';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../state/store';
import {User} from '../models/user';
import {loadRecommendedHikes} from './actions';
import {RecommendationState} from './reducer';
import {HikePaper} from '../hike/hike';
import {LoadingPaperSkeleton} from '../common-components';
import {CenterView} from '../center/reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...containerStyle(theme)
  })
);

const RecommendedHikes: React.FC<{userid: string}> = ({userid}) => {
  const dispatch = useDispatch();
  const {hikes, loading} = useSelector<AppState, RecommendationState>(
    state => state.recommendation
  );
  React.useEffect(() => {
    dispatch(loadRecommendedHikes(userid));
  }, []);
  return (
    <Grid container spacing={3}>
      {loading ? (
        <LoadingPaperSkeleton />
      ) : (
        hikes.map((hike, i) => (
          <Grid key={i} item xs={12}>
            <HikePaper
              hike={hike}
              detailsView={CenterView.recommendedHikeDetailView}
              commentsView={CenterView.recommendedHikeCommentsView}
            ></HikePaper>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export const Recommendation: React.FC = () => {
  const classes = useStyles();
  const user = useSelector<AppState, User | undefined>(state => state.login.userSession.user);
  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Hikes that we recommend</Typography>
          <Typography variant="subtitle1">Based on other users with similar preferences</Typography>
        </Grid>
        <Grid item xs={12}>
          {user ? <RecommendedHikes userid={user.userid} /> : <></>}
        </Grid>
      </Grid>
    </Container>
  );
};
