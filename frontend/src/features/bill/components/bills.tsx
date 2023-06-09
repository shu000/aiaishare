import { FC, memo } from 'react';
import { useLoginUser } from '../../auth/stores/hooks';
import { useBillsQueryValue } from '../states/useBillsQuery';
import { BillBaloon } from './billBaloon';

const Bills: FC = memo(() => {
    const loginUser = useLoginUser();
    const bills = useBillsQueryValue();

    return (
        <div>
            {bills.length === 0 && <p>新しい請求はありません</p>}
            {bills.map((bill) => {
                return (
                    <BillBaloon
                        key={bill.id}
                        className="mb-2"
                        bill={bill}
                        direction={bill.billedBy === loginUser.id ? 'right' : 'left'}
                    />
                );
            })}
        </div>
    );
});

Bills.displayName = 'Bills';
export { Bills };
