import { Bill } from '../models/bill';
import { Settlement } from '../models/settlement';

export type PostSettlementPayload = {
    bills: Bill['id'][];
};

export const postSettlement = (payload: PostSettlementPayload): Promise<Settlement> => {
    return new Promise((resolve) => {
        resolve({
            id: '' + Math.random(),
            bills: payload.bills,
            settledAt: new Date(),
        });
    });
};
