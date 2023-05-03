import { atom, selector, useRecoilCallback, useRecoilValue } from 'recoil';
import { Bill } from '../models/bill';
import { getBills } from '../api/getBills';
import { PostBillPayload, postBill } from '../api/postBill';

type CreateBill = (payload: PostBillPayload) => Promise<void>;

/**
 * atomを持ち、APIでサーバ状態を取得する前にatomを更新するパターン
 * Drag&Dropとか、状態を即時更新した後にサーバ状態を取得したいときに
 */
const bills = atom<Bill[]>({
    key: 'bills_sample',
    default: [],
    effects: [
        ({ setSelf, trigger }) => {
            console.log(trigger);
            if (trigger === 'get') {
                setSelf(getBills());
            }
        },
    ],
});

const useBillsQueryAtom = () => useRecoilValue(bills);

const useCreateBillAtom = (): CreateBill => {
    return useRecoilCallback(({ set }) => {
        return async (payload: PostBillPayload) => {
            const bill = await postBill(payload);
            set(bills, (bills) => [...bills, bill]);
        };
    });
};

const useRefreshBillsAtom = () => {
    return useRecoilCallback(({ set }) => {
        return async () => {
            set(bills, await getBills());
        };
    });
};

/**
 * atomを持たず、常にAPI結果を表示するパターン
 * フォームのsubmitなどはこれでよいはず
 */
const billsQueryId = atom({
    key: 'billsQueryId_sample',
    default: 0,
});

const billsQuery = selector<Bill[]>({
    key: 'billsQuery_sample',
    get: async ({ get }) => {
        get(billsQueryId); // refresh when id is updated
        return getBills();
    },
});

const useBillsQuery = (): Bill[] => {
    return useRecoilValue(billsQuery);
};

const useCreateBill = (): CreateBill => {
    return useRecoilCallback(({ set }) => {
        const refreshBillsQuery = () => {
            set(billsQueryId, (id) => id + 1);
        };

        return async (payload: PostBillPayload) => {
            await postBill(payload);
            refreshBillsQuery();
        };
    });
};
