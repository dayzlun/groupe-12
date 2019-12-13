import {
  Button,
  Container,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Slider,
  Theme,
  Typography
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SaveIcon from '@material-ui/icons/Save';
import TimerIcon from '@material-ui/icons/Timer';
import ElevationIcon from '@material-ui/icons/TrendingUp';
import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {containerStyle} from '../common-style';
import {AppState} from '../state/store';
import {PreferencesState} from './reducer';
import {loadUserPreferences} from './actions';
import {User} from '../models/user';
import {HikerAgeRange} from '../models/preferences';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...containerStyle(theme),
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

export const Preferences: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {userPreferences, loading} = useSelector<AppState, PreferencesState>(
    state => state.preferences
  );
  const user = useSelector<AppState, User | undefined>(state => state.login.userSession.user);
  const [elevationGain, setElevationGain] = React.useState(0);
  const [age, setAge] = React.useState<HikerAgeRange>(HikerAgeRange.none);
  const [hikeDuration, setHikeDuration] = React.useState(1);
  // Make sure to update preferences when we get them back from the API call
  React.useEffect(() => {
    if (userPreferences) {
      const {avgHikeDuration, elevationGain, otherHikersAge} = userPreferences;
      setElevationGain(elevationGain);
      setAge(otherHikersAge);
      setHikeDuration(avgHikeDuration);
    }
  }, [userPreferences]);

  // loading user preferences only when component is mounting
  React.useEffect(() => {
    user && dispatch(loadUserPreferences(user.userid));
  }, []);

  return (
    <Container className={classes.container}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Typography variant="h4">
            <FavoriteIcon />
            Manage your preferences
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography>
            <ElevationIcon />
            Elevation Gain
          </Typography>

          <Slider
            disabled={loading}
            value={elevationGain}
            onChange={(e, v) => setElevationGain(v as number)}
            getAriaValueText={s => `+/- ${s}`}
            valueLabelDisplay="on"
            step={50}
            min={0}
            max={2000}
          />
        </Grid>
        <Grid item xs={7}>
          <FormControl className={classes.formControl} disabled={loading}>
            <InputLabel htmlFor="age-select">Prefered other hiker's age</InputLabel>
            <Select
              native
              value={age}
              onChange={e => setAge(e.target.value as HikerAgeRange)}
              inputProps={{
                name: 'age',
                id: 'age-select'
              }}
            >
              <option value={HikerAgeRange.none} />
              <option value={HikerAgeRange.minor}>{HikerAgeRange.minor}</option>
              <option value={HikerAgeRange.youth}>{HikerAgeRange.youth}</option>
              <option value={HikerAgeRange.thirties}>{HikerAgeRange.thirties}</option>
              <option value={HikerAgeRange.aboveForty}>{HikerAgeRange.aboveForty}</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7}>
          <Typography gutterBottom>
            <TimerIcon />
            Average Hike duration
          </Typography>
          <Slider
            disabled={loading}
            value={hikeDuration}
            onChange={(e, v) => setHikeDuration(v as number)}
            getAriaValueText={s => `${s} h`}
            valueLabelDisplay="on"
            step={1}
            min={1}
            max={24}
          />
        </Grid>
        <Grid item xs={7}>
          <Grid container>
            <Grid item xs={4}>
              <Button
                disabled={loading}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Button disabled={loading} size="large" startIcon={<CancelIcon />}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
