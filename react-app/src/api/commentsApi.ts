import {delay} from './common';
import {Observable, from} from 'rxjs';
import { Comment } from '../models/comments';
import {mockComments} from '../comment/reducer';

export const getHikeComments = (hikeid: string): Observable<{comments: Comment[];}> => {
    const fakeApi = async (hikeid: string) => {
        await delay(2000);
        return {comments: mockComments};
    }
    return from(fakeApi(hikeid));
}