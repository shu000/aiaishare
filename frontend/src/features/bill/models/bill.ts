import { User } from './user';

export type Bill = {
    id: string;
    subject: string;
    amount: number;
    billedBy: User['id'];
};
