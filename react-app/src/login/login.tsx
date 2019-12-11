import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, {useState} from 'react';
import {AppState, LoginStep} from '../state/store';
import {onSignIn} from './actions';
import {useDispatch, useSelector} from 'react-redux';
import {LoginState} from './reducer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/arla-sigl/groupe-12">
        C'est Parla
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage:
      'url(https://cdn.pixabay.com/photo/2018/08/14/09/59/mountains-3605113_960_720.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export const Login: React.FC = () => {
  const classes = useStyles();

  const [username, onUsernameChange] = useState('');
  const [password, onPasswordChange] = useState('');

  const {
    userSession: {loginStep, error}
  } = useSelector<AppState, LoginState>(state => state.login);
  const dispatch = useDispatch();
  const validatingCredentials: boolean = loginStep === LoginStep.validatingCredentials;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={() => dispatch(onSignIn({username, password}))}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={error ? 'Error' : 'Username or Email Address'}
              helperText={error}
              error={!!error}
              name="email"
              autoComplete="email"
              autoFocus
              disabled={validatingCredentials}
              value={username}
              onChange={event => onUsernameChange(event.currentTarget.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              error={!!error}
              required
              fullWidth
              name="password"
              label={error ? 'Error' : 'Password'}
              helperText={error}
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={validatingCredentials}
              value={password}
              onChange={event => onPasswordChange(event.currentTarget.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
