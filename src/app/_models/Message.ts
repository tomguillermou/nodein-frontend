import { User } from './User';

export interface Message {
    owner: User;
    receiver: User;
    content: string;
}
