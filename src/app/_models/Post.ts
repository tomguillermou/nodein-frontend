import { User } from './User';

export class Post {

    _id: string;
    owner: User;
    content: string;
    upvotes: number;
    downvotes: number;
    createdAt: string;
    updatedAt: string;
}
