import * as React from 'react';
import {ListItem, List, ListItemIcon, ListItemText} from '@material-ui/core';
import DirectionsWalk from '@material-ui/icons/DirectionsWalk';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GroupIcon from '@material-ui/icons/Group';
import AddHikeIcon from '@material-ui/icons/AddPhotoAlternate';
import RecommendationIcon from '@material-ui/icons/LocalOffer';
import ShopIcon from '@material-ui/icons/ShoppingCart';
import {useDispatch} from 'react-redux';
import {switchView} from './actions';
import {CenterView} from './reducer';

export const SecondaryMenuItems: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <List>
      <ListItem key='group-view' button onClick={() => dispatch(switchView(CenterView.findGroupView))}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Find a group" />
      </ListItem>
      <ListItem key='add-hike-view' button onClick={() => dispatch(switchView(CenterView.addAHikeView))}>
        <ListItemIcon>
          <AddHikeIcon />
        </ListItemIcon>
        <ListItemText primary="Add a new hike" />
      </ListItem>
      <ListItem button key='recommendation-view' onClick={() => dispatch(switchView(CenterView.recommendationView))}>
        <ListItemIcon>
          <RecommendationIcon />
        </ListItemIcon>
        <ListItemText primary="Recommendations" />
      </ListItem>
      <ListItem button key='shop-view' onClick={() => dispatch(switchView(CenterView.shopView))}>
        <ListItemIcon>
          <ShopIcon />
        </ListItemIcon>
        <ListItemText primary="Buy/Rent equipment" />
      </ListItem>
    </List>
  );
};

export const MainMenuItems: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <List>
      <ListItem button key='hike-view' onClick={() => dispatch(switchView(CenterView.hikeView))}>
        <ListItemIcon>
          <DirectionsWalk />
        </ListItemIcon>
        <ListItemText primary="Browse hikes" />
      </ListItem>
      <ListItem button key='preferences-view' onClick={() => dispatch(switchView(CenterView.preferencesView))}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Favorite hikes" />
      </ListItem>
    </List>
  );
};
