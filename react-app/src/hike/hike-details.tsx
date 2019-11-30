import * as React from 'react';
import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {containerStyle} from '../common-style';
import {Hike} from '../models/hike';
import {ThreeDayForecastTable} from '../forecast/forecast';
import {useDispatch} from 'react-redux';
import {switchView} from '../center/actions';
import {CenterView} from '../center/reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...containerStyle(theme)
  })
);

export const HikeDetails: React.FC<{hike: Hike; backToView: CenterView;}> = ({hike, backToView}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container className={classes.container}>
      <Grid container spacing={9}>
        <Grid item xs={10}>
          <Typography variant="h4">{hike.name}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => dispatch(switchView(backToView))}>
            <CloseIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <ThreeDayForecastTable coordinates={hike.coord} />
        </Grid>
      </Grid>
    </Container>
  );
};
