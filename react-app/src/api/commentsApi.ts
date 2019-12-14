import {delay, tryFetch} from './common';
import {Observable, from} from 'rxjs';
import { Comment } from '../models/comments';
import {mockComments} from '../comment/reducer';

const fetchHikeComments = async (hikeid: string) => {
    let comments: Comment[] = [];
    const {res, err} = await tryFetch<Comment[]>('Comments API', `https://comments.arla-sigl.fr/v1/hike?hikeid=${hikeid}`)
    if (res) {
        comments = res;
    }
    return {comments, err};
}

export const getHikeComments = (hikeid: string): Observable<{comments: Comment[]; err?: string}> => {
    
    return from(fetchHikeComments(hikeid));
}