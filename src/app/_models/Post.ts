import { User } from './User';

export class Post {

    _id: string;
    owner: User;
    content: string;
    createdAt: string;
    updatedAt: string;
    upvotesCount: number;
    downvotesCount: number;
}
