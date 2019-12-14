import {Action} from 'redux';
import {Comment} from '../models/comments';
import { ApiError } from '../state/store';

export const LOAD_HIKE_COMMENTS = 'comment#loadHikeComments';
export type LoadHikeComments = Action & {
  hikeid: string;
};
export const loadHikeComments = (hikeid: string): LoadHikeComments => ({
  type: LOAD_HIKE_COMMENTS,
  hikeid
});

export const HIKE_COMMENTS_LOADED = 'comment#hikeCommentsLoaded';
export type HikeCommentsLoaded = Action & {
  comments: Comment[];
};
export const hikeCommentsLoaded = (comments: Comment[]): HikeCommentsLoaded => ({
  type: HIKE_COMMENTS_LOADED,
  comments
});

export const ADD_COMMENT_TO_HIKE = 'comment#addCommentToHike';
export type AddCommentToHike = Action & {
  hikeid: string;
};
export const addCommentToHike = (hikeid: string): AddCommentToHike => ({
  type: ADD_COMMENT_TO_HIKE,
  hikeid
});

export const COMMENTS_API_ERROR = 'comment#commentsApiError';
export type CommentsApiError = Action & ApiError;

export const commentsApiError = (err: string): CommentsApiError => ({
   type: COMMENTS_API_ERROR,
   err
});


export type CommentActions = LoadHikeComments | HikeCommentsLoaded | AddCommentToHike | CommentsApiError;
