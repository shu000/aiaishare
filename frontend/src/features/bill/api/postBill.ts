import { Bill } from '../models/bill';

export type PostBillPayload = Omit<Bill, 'id' | 'billedBy'>;

export const postBill = (payload: PostBillPayload): Promise<Bill> => {
    return new Promise((resolve, reject) => {
        resolve({
            id: '' + Math.random(),
            subject: payload.subject,
            amount: payload.amount,
            billedBy: 'me',
        });
    });
};
