import {
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import InfoIcon from '@material-ui/icons/Info';
import ElevationIcon from '@material-ui/icons/FilterHdr';
import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowseAreas} from '../area/browse-areas';
import {LoadingPaperSkeleton} from '../common-components';
import {containerStyle, paperStyle} from '../common-style';
import {Hike} from '../models/hike';
import {HikeStarRating} from '../rating/hike-star-rating';
import {AppState} from '../state/store';
import {HikeState} from './reducer';
import {switchToHikeDetails, switchToHikeComments} from '../center/actions';
import {CenterView} from '../center/reducer';

export type HikePaperProps = {hike: Hike; detailsView: CenterView; commentsView: CenterView};

const useStyles = makeStyles(theme =>
  createStyles({
    ...containerStyle(theme),
    fixedHeight: {
      height: 240
    }
  })
);

const useHikeStyles = makeStyles(theme =>
  createStyles({
    ...paperStyle(theme)
  })
);

export const HikePaper: React.FC<HikePaperProps> = ({hike, detailsView, commentsView}) => {
  const classes = useHikeStyles();
  const dispatch = useDispatch();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="h4" component="h3">
            {hike.name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <HikeStarRating hikeId={hike.hikeid} />
        </Grid>
        <Grid item xs={12}>
          <Typography component="p">
            <ElevationIcon />
            Elevation/gain: {hike.elevationGain}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => dispatch(switchToHikeComments(hike, commentsView))}>
            <CommentIcon />
            Comments
          </Button>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Button
            color="secondary"
            onClick={() => dispatch(switchToHikeDetails(hike, detailsView))}
          >
            <InfoIcon />
            More details...
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const Hikes: React.FC = () => {
  const classes = useStyles();
  const {hikes, loading} = useSelector<AppState, HikeState>(state => state.hike);

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Browse hikes in the area</Typography>
        </Grid>
        <Grid item xs={12}>
          <BrowseAreas />
        </Grid>
        {loading ? (
          <Grid item xs={12}>
            <LoadingPaperSkeleton />
          </Grid>
        ) : (
          hikes.map((hike, i) => (
            <Grid item xs={12} key={i}>
              <HikePaper
                hike={hike}
                detailsView={CenterView.hikeDetailView}
                commentsView={CenterView.hikeCommentsView}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};
