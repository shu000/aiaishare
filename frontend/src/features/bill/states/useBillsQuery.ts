import { atom, selector, useRecoilValue } from 'recoil';
import { getBills } from '../api/getBills';
import { Bill } from '../models/bill';

export const billsQueryRequestIdState = atom({
    key: 'billsQueryRefresher',
    default: 0,
});

export const billsQuery = selector<Bill[]>({
    key: 'billsQuery',
    get: async ({ get }) => {
        get(billsQueryRequestIdState); // refresh when the refresher is updated
        return getBills();
    },
});

export const useBillsQueryValue = (): Bill[] => {
    return useRecoilValue(billsQuery);
};
