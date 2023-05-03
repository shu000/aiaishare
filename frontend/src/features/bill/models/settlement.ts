import { Bill } from './bill';

export type Settlement = {
    id: string;
    bills: Bill['id'][];
    settledAt: Date;
};
