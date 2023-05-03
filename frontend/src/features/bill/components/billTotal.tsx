import { FC, memo } from 'react';
import { Yen } from '../../../components/yen';
import { useTotalAmountQuery } from '../states/queries/useTotalAmountQuery';

const BillTotal: FC = memo(() => {
    const total = useTotalAmountQuery();

    return (
        <div>
            <Yen amountClassName="text-4xl" yenClassName="text-lg">
                {total}
            </Yen>
        </div>
    );
});

BillTotal.displayName = 'BillTotal';
export { BillTotal };
