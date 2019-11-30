import {User} from './user';

export type Comment = {
  commentId: string;
  user: User;
  hikeid: string;
  comment: string;
  commentedAt: number;
};
