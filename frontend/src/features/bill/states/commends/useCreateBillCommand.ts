import { useRecoilCallback } from 'recoil';
import { PostBillPayload, postBill } from '../../api/postBill';
import { billsQueryRefresher } from '../queries/useBillsQuery';

type CreateBillCommand = (payload: PostBillPayload) => Promise<void>;

export const useCreateBillCommand = (): CreateBillCommand => {
    return useRecoilCallback(({ set }) => {
        const refreshBillsQuery = () => {
            set(billsQueryRefresher, (id) => id + 1);
        };

        return async (payload: PostBillPayload) => {
            await postBill(payload);
            refreshBillsQuery();
        };
    });
};
