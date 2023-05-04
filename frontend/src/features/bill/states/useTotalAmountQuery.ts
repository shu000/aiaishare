import { selector, useRecoilValue } from 'recoil';
import { loginUserState } from '../../auth/stores/stores';
import { Bill } from '../models/bill';
import { billsQuery } from './useBillsQuery';

const totalAmountQuery = selector<Bill['amount']>({
    key: 'totalAmountQuery',
    get: async ({ get }) => {
        const bills = await get(billsQuery);
        const loginUser = get(loginUserState);

        return bills.reduce<number>((total, bill) => {
            if (bill.billedBy === loginUser.id) {
                return (total += bill.amount);
            }

            return (total -= bill.amount);
        }, 0);
    },
});

export const useTotalAmountQuery = () => useRecoilValue(totalAmountQuery);
