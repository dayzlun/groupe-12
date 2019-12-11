import {Theme, createStyles, createMuiTheme} from '@material-ui/core';

export const parlaTheme: Theme = createMuiTheme({
  palette: {
    text: {
      primary: '#666'
    },
    primary: {
      main: '#ff9900',
      contrastText: '#f5f5f5'
    },
    secondary: {
      main: '#9800ff',
      contrastText: '#f5f5f5'
    }
  }
});

export const paperStyle = (theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column'
    }
  });

export const containerStyle = (theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  });
