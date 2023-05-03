import { atom, selector, useRecoilValue } from 'recoil';
import { getBills } from '../../api/getBills';
import { Bill } from '../../models/bill';

export const billsQueryRefresher = atom({
    key: 'billsQueryRefresher',
    default: 0,
});

export const billsQuery = selector<Bill[]>({
    key: 'billsQuery',
    get: async ({ get }) => {
        get(billsQueryRefresher); // refresh when the refresher is updated
        return getBills();
    },
});

export const useBillsQuery = (): Bill[] => {
    return useRecoilValue(billsQuery);
};
