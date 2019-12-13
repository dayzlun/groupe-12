import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {Hikes} from '../hike/hike';
import {AppState} from '../state/store';
import {MainMenuItems, SecondaryMenuItems} from './menu-items';
import {CenterView, CenterState} from './reducer';
import {Preferences} from '../preferences/preferences';
import {AddHike} from '../hike/add-hike';
import {FindAGroup} from '../find-a-group/find-a-group';
import {HikeDetails} from '../hike/hike-details';
import {Hike} from '../models/hike';
import {HikeComments} from '../comment/comments';
import {Shop} from '../shop/shop';
import {Recommendation} from '../recommendation/recommendation';
import { Statistics } from '../statistics/statistics';

const drawerWidth = '240';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundImage: 'linear-gradient(to right, #ff9900, #9800ff)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  }
}));

const SwitchView: React.FC = () => {
  const {
    view: {selected: selectedView, selectedHike, selectedHikeForComment}
  } = useSelector<AppState, CenterState>(state => state.center);

  switch (selectedView) {
    case CenterView.preferencesView:
      return <Preferences />;
    case CenterView.findGroupView:
      return <FindAGroup />;
    case CenterView.statisticsView:
      return <Statistics />;
    case CenterView.recommendationView:
      return <Recommendation />;
    case CenterView.recommendedHikeDetailView:
      return selectedHike ? (
        <HikeDetails hike={selectedHike} backToView={CenterView.recommendationView} />
      ) : (
        <h1>No hike selected</h1>
      );
    case CenterView.recommendedHikeCommentsView:
      return selectedHikeForComment ? (
        <HikeComments hike={selectedHikeForComment} backToView={CenterView.recommendationView} />
      ) : (
        <h1>No Hike selected for comment</h1>
      );
    case CenterView.shopView:
      return <Shop />;
    case CenterView.hikeDetailView:
      return selectedHike ? (
        <HikeDetails hike={selectedHike} backToView={CenterView.hikeView} />
      ) : (
        <h1>No hike selected</h1>
      );
    case CenterView.hikeCommentsView:
      return selectedHikeForComment ? (
        <HikeComments hike={selectedHikeForComment} backToView={CenterView.hikeView} />
      ) : (
        <h1>No Hike selected for comment</h1>
      );
    default:
      return <Hikes />;
  }
};

export const Center: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (currentTogglingState: boolean) => setDrawerOpen(!currentTogglingState);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="drawerOpen drawer"
            onClick={() => toggleDrawer(drawerOpen)}
            className={clsx(classes.menuButton, drawerOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Parla
          </Typography>
          <IconButton color="inherit">
            <FaceIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !drawerOpen && classes.drawerPaperClose)
        }}
        open={drawerOpen}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => toggleDrawer(drawerOpen)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MainMenuItems />
        <Divider />
        <SecondaryMenuItems />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <SwitchView />
      </main>
    </div>
  );
};
