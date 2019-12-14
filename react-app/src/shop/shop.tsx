import * as React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Container,
  Grid,
  Box,
  ButtonGroup
} from '@material-ui/core';
import {containerStyle} from '../common-style';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from '../state/store';
import {User} from '../models/user';
import {ShopState} from './reducer';
import {LoadingCardSkeleton, ErrorPaper} from '../common-components';
import {CatalogItem} from '../models/catalog-item';
import {loadCatalog} from './actions';

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

const CatalogItem: React.FC<{item: CatalogItem}> = ({item}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.imageUrl} title={item.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
        <Button size="small" color="secondary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};

const Catalog: React.FC<{userid: string}> = ({userid}) => {
  const {items, loading, err} = useSelector<AppState, ShopState>(state => state.shop);
  const dispatch = useDispatch();
  // Load catalog items when component is mounted
  React.useEffect(() => {
    dispatch(loadCatalog(userid));
  }, []);

  return (
    <Grid container spacing={3}>
      {loading ? (
        Array.from(new Array(3)).map((_, i) => (
          <Grid item key={i}>
            <LoadingCardSkeleton />
          </Grid>
        ))
      ) : err ? (
        <ErrorPaper err={err} />
      ) : (
        items.map((item, i) => (
          <Grid item xs={4} key={i}>
            <CatalogItem item={item} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export const Shop: React.FC = () => {
  const classes = useStyles();
  const user = useSelector<AppState, User | undefined>(state => state.login.userSession.user);
  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Buy/rent equipment for your hike</Typography>
        </Grid>
        <Grid item xs={12}>
          {user ? <Catalog userid={user.userid} /> : <></>}
        </Grid>
      </Grid>
    </Container>
  );
};
