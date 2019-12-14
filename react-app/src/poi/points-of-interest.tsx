import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  createStyles,
  Theme,
  Typography,
  Grid
} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import * as React from 'react';
import {containerStyle} from '../common-style';
import {PointOfInterest} from '../models/point-of-interest';
import {PoiImageMap} from './helper';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../state/store';
import {POIState} from './reducer';
import {LoadingCardSkeleton, ErrorPaper} from '../common-components';
import {loadPointsOfInterest} from './actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...containerStyle(theme),
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  })
);

const POI: React.FC<{poi: PointOfInterest}> = ({poi}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={PoiImageMap[poi.label]} title={poi.label} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {poi.name}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary" component="p">
            {poi.label}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Go to site
        </Button>
      </CardActions>
    </Card>
  );
};

export const PointsOfInterest: React.FC<{hikeid: string}> = ({hikeid}) => {
  const classes = useStyles();
  const {pois, loading, err} = useSelector<AppState, POIState>(state => state.poi);
  const dispatch = useDispatch();
  // Load points of interests when component is mounting
  React.useEffect(() => {
    dispatch(loadPointsOfInterest(hikeid));
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Points of interest</Typography>
      </Grid>
      {loading
        ? Array.from(new Array(3)).map((_, i) => (
            <Grid item key={i} xs={4}>
              <LoadingCardSkeleton />
            </Grid>
          ))
        : err ? <ErrorPaper err={err} /> : pois.map((poi, i) => (
            <Grid item key={i} xs={4}>
              <POI poi={poi} />
            </Grid>
          ))}
    </Grid>
  );
};
