import * as React from 'react';
import {
  TextField,
  Container,
  Grid,
  Slider,
  Typography,
  Button,
  makeStyles,
  createStyles
} from '@material-ui/core';
import ElevationIcon from '@material-ui/icons/TrendingUp';
import AddIcon from '@material-ui/icons/AddPhotoAlternate';
import CancelIcon from '@material-ui/icons/Cancel';
import {containerStyle} from '../common-style';

const useStyles = makeStyles(theme =>
  createStyles({
    ...containerStyle(theme)
  })
);

export const AddHike: React.FC = () => {
  const classes = useStyles();
  const [hikeName, setHikeName] = React.useState('');
  const [elevation, setElevation] = React.useState(0);

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant='h4'>
                Propose a new hike
            </Typography>
        </Grid>
        <Grid item xs={7}>
          <TextField 
            value={hikeName} 
            label='Hike name'
            onChange={e => setHikeName(e.currentTarget.value)} />
        </Grid>
        <Grid item xs={7}>
          <Typography gutterBottom>
            <ElevationIcon />
            Elevation Gain
          </Typography>
          <Slider
            value={elevation}
            onChange={(e, v) => setElevation(v as number)}
            getAriaValueText={s => `+/- ${s}`}
            valueLabelDisplay="on"
            step={50}
            min={0}
            max={2000}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <Button variant="contained" color="primary" size="large" startIcon={<AddIcon />}>
                Add
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
