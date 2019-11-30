import * as React from 'react';
import {
  Grid,
  Typography,
  Slider,
  Select,
  InputLabel,
  FormControl,
  makeStyles,
  Theme,
  createStyles,
  Container,
  Button,
  Divider
} from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ElevationIcon from '@material-ui/icons/TrendingUp';
import {containerStyle} from '../common-style';

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
  const [elevationGain, setElevationGain] = React.useState(100);
  const [age, setAge] = React.useState('');
  const [hikeDuration, setHikeDuration] = React.useState(1);

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
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-select">Prefered other hiker's age</InputLabel>
            <Select
              native
              value={age}
              onChange={e => setAge(e.target.value as string)}
              inputProps={{
                name: 'age',
                id: 'age-select'
              }}
            >
              <option value="no preferences" />
              <option value="-18">-18</option>
              <option value="18-29">18-29</option>
              <option value="30-40">30-40</option>
              <option value="40+">40+</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={7}>
          <Typography gutterBottom>
            <TimerIcon />
            Average Hike duration
          </Typography>
          <Slider
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
              <Button variant="contained" color="primary" size="large" startIcon={<SaveIcon />}>
                Save
              </Button>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Button size="large" startIcon={<CancelIcon />}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
