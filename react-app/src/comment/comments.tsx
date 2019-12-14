import {
  Avatar,
  Container,
  createStyles,
  Fab,
  Grid,
  List,
  ListItem,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
  Button,
  ButtonGroup,
  Divider
} from '@material-ui/core';
import ValidateIcon from '@material-ui/icons/Check';
import CancelIcon from '@material-ui/icons/Cancel';
import CloseIcon from '@material-ui/icons/Close';
import * as moment from 'moment';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {containerStyle} from '../common-style';
import {Comment} from '../models/comments';
import {Hike} from '../models/hike';
import {addCommentToHike, loadHikeComments} from './actions';
import {AppState} from '../state/store';
import {CommentState} from './reducer';
import {LoadingPaperSkeleton, ErrorPaper} from '../common-components';
import {User} from '../models/user';
import {switchView} from '../center/actions';
import {CenterView} from '../center/reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...containerStyle(theme),
    commentHeader: {
      display: 'flex'
    },
    avatarComment: {
      paddingLeft: '10px'
    }
  })
);

const OtherUserComment: React.FC<{comment: Comment}> = ({comment}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} className={classes.commentHeader}>
        <Avatar>{comment.user.username[0].toUpperCase()}</Avatar>
        <Typography variant="body2" className={classes.avatarComment}>
          <b>{comment.user.username}</b>
          <br />
          <i>{moment.duration(Date.now() - comment.commentedAt).humanize()}</i> ago
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{comment.comment}</Typography>
      </Grid>
    </Grid>
  );
};

const AddCommentToHike: React.FC<{hikeid: string}> = ({hikeid}) => {
  const [comment, setComment] = React.useState('');
  const user = useSelector<AppState, User | undefined>(state => state.login.userSession.user);
  const dispatch = useDispatch();
  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <Avatar>{user ? user.username[0].toUpperCase() : 'You'}</Avatar>
      </Grid>
      <Grid item>
        <TextField
          id="input-with-icon-grid"
          label="Add your comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </Grid>
      {comment.length > 0 ? (
        <Grid item>
          <ButtonGroup>
            <Button
              color="primary"
              onClick={() => {
                dispatch(addCommentToHike(hikeid));
                setComment('');
              }}
            >
              <ValidateIcon />
            </Button>
            <Button
              onClick={() => {
                setComment('');
              }}
            >
              <CancelIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export const HikeComments: React.FC<{hike: Hike; backToView: CenterView}> = ({
  hike,
  backToView
}) => {
  const classes = useStyles();
  const {comments, loading, err} = useSelector<AppState, CommentState>(state => state.comment);
  const dispatch = useDispatch();
  // Load this hike comments when component is mounting
  React.useEffect(() => {
    dispatch(loadHikeComments(hike.hikeid));
  }, []);

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <Typography variant="h4">{hike.name}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => dispatch(switchView(backToView))}>
            <CloseIcon fontSize="large" />
          </Button>
        </Grid>
        { !err && <Grid item xs={12}>
          <AddCommentToHike hikeid={hike.hikeid} />
        </Grid>}
        <Grid item xs={12}>
          {loading ? (
            <LoadingPaperSkeleton />
          ) : err ? (
            <ErrorPaper err={err} />
          ) : (
            <List>
              {comments.map((comment, i) => (
                <ListItem key={i}>
                  <OtherUserComment comment={comment} />
                </ListItem>
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
