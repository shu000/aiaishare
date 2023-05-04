import { useRecoilCallback } from 'recoil';
import { PostBillPayload, postBill } from '../api/postBill';
import { billsQueryRequestIdState } from './useBillsQuery';

type CreateBillCommand = (payload: PostBillPayload) => Promise<void>;

export const useCreateBillCommand = (): CreateBillCommand => {
    return useRecoilCallback(({ set }) => {
        const refreshBillsQuery = () => {
            set(billsQueryRequestIdState, (id) => id + 1);
        };

        return async (payload: PostBillPayload) => {
            await postBill(payload);
            refreshBillsQuery();
        };
    });
};
