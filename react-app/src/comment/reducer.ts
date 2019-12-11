import {Reducer} from 'redux';
import {AnyActions} from '../actions';
import {HIKE_COMMENTS_LOADED, HikeCommentsLoaded, LOAD_HIKE_COMMENTS} from './actions';
import {Comment} from '../models/comments';
import { testUser } from '../api/common';

export type CommentState = {
  comments: Comment[];
  loading: boolean;
};

export const initialCommentState: CommentState = {
  comments: [],
  loading: false
};

export const mockComments: Comment[] = [{
  comment: 'Awesome hike!',
  commentId: 'comment1',
  user: testUser,
  commentedAt: 1575795079117,
  hikeid: '1'
},
{
  comment: 'Group was cool, nice landscape.',
  commentId: 'comment2',
  user: testUser,
  commentedAt: 1575795078923,
  hikeid: '1'
}]

export const commentReducer: Reducer<CommentState, AnyActions> = (
  commentState: CommentState | undefined,
  action: AnyActions
) => {
  if (!commentState) return initialCommentState;
  switch (action.type) {
    case LOAD_HIKE_COMMENTS:
      return {
        ...commentState,
        loading: true,
        comments: []
      };
    case HIKE_COMMENTS_LOADED:
      const comments = (action as HikeCommentsLoaded).comments;
      return {
        ...commentState,
        loading: false,
        comments
      };
    default:
      return commentState;
  }
};
