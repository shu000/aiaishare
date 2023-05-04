import { useRecoilCallback } from 'recoil';
import { postSettlement } from '../api/postSettlement';
import { billsQueryRequestIdState } from './useBillsQuery';

type CreateSettlementCommand = () => Promise<void>;

export const useCreateSettlementCommand = (): CreateSettlementCommand => {
    return useRecoilCallback(({ set }) => {
        const refreshBillsQuery = () => {
            set(billsQueryRequestIdState, (id) => id + 1);
        };

        return async () => {
            /* const settlement = */ await postSettlement({ bills: [] });
            refreshBillsQuery();
        };
    });
};
