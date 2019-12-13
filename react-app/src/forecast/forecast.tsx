import * as React from 'react';
import {
  Container,
  makeStyles,
  createStyles,
  Paper,
  Grid,
  Typography,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Snackbar
} from '@material-ui/core';
import {paperStyle, parlaTheme} from '../common-style';
import ForecastIcon from '@material-ui/icons/WbSunny';
import {ThreeHourForecast, Weather, WeatherForecast, WeatherIcon} from '../models/forecast';
import {groupByForecastKey, ForecastGroupedByKey, iconMap} from './helper';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../state/store';
import {ForecastState, initialForecastState} from './reducer';
import {LoadingPaperSkeleton} from '../common-components';
import {loadWeaherForecast} from './actions';
import {LocationCoordinates} from '../models/hike';

const useStyles = makeStyles(theme =>
  createStyles({
    ...paperStyle(theme),
    tabBar: {
      flexGrow: 1
    },
    table: {
      flexGrow: 1
    },
    icon: {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.fontSize * 2
    }
  })
);

const ForecastForDay: React.FC<{forecast: ThreeHourForecast[]}> = ({forecast}) => {
  const classes = useStyles();
  const dataRows: ForecastGroupedByKey = groupByForecastKey(forecast);
  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell align="left">time</TableCell>
          {dataRows.dates.map((date, i) => (
            <TableCell key={i} align="center">
              {date}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="left">Weather</TableCell>
          {dataRows.weatherIcons.map((icons, i) => (
            <TableCell key={i} align="center">
              {icons.map((icon, j) => (
                <i
                  key={j}
                  className={`wi ${iconMap[icon]} ${classes.icon}`}
                ></i>
              ))}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="left">Weather like</TableCell>
          {dataRows.weatherDescriptions.map((data, j) => (
            <TableCell key={j} align="center">
              {data}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="left">Temperature</TableCell>
          {dataRows.temps.map((data, i) => (
            <TableCell key={i} align="center">
              {data}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="left">Min. Temp.</TableCell>
          {dataRows.tempMins.map((data, i) => (
            <TableCell key={i} align="center">
              {data}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="left">Max. Temp.</TableCell>
          {dataRows.tempMaxs.map((data, i) => (
            <TableCell key={i} align="center">
              {data}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          <TableCell align="left">Wind speed</TableCell>
          {dataRows.windSpeeds.map((data, i) => (
            <TableCell key={i} align="center">
              {data}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

const Forecast: React.FC<{weatherForcast: WeatherForecast}> = ({weatherForcast}) => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const {city, today, tomorrow, inTwoDays} = weatherForcast;
  let tabContent = <></>;
  switch (selectedTab) {
    case 0:
      tabContent = <ForecastForDay forecast={today} />;
      break;
    case 1:
      tabContent = <ForecastForDay forecast={tomorrow} />;
      break;
    case 2:
      tabContent = <ForecastForDay forecast={inTwoDays} />;
      break;
    default:
      tabContent = <Typography variant="body1">No weather forecast data</Typography>;
  }
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <ForecastIcon />
          <Typography variant="body1">Forecast</Typography>
        </Grid>
        <Grid item xs={10} className={classes.tabBar}>
          <Tabs
            value={selectedTab}
            onChange={(e, v) => setSelectedTab(v)}
            centered
            textColor="secondary"
          >
            <Tab label="Today" />
            <Tab label="Tomorrow" />
            <Tab label="In 2 days" />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          Weather forecast for{' '}
          <Typography color="secondary" variant="body1">
            {city.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {tabContent}
        </Grid>
      </Grid>
    </Paper>
  );
};

export const ThreeDayForecastTable: React.FC<{coordinates: LocationCoordinates}> = ({coordinates}) => {
  const {weatherForecast, loading} = useSelector<AppState, ForecastState>(state => state.forecast);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadWeaherForecast(coordinates));
  }, []);
  return loading ? (
    <LoadingPaperSkeleton />
  ) : weatherForecast ? (
    <Forecast weatherForcast={weatherForecast} />
  ) : (
    <h1>Oups!</h1>
  );
};
