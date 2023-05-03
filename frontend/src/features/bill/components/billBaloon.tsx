import { FC, memo } from 'react';
import { Baloon } from '../../../components/baloon';
import { Yen } from '../../../components/yen';
import { Bill } from '../models/bill';

type Props = {
    className?: string;
    bill: Bill;
    direction: 'left' | 'right';
};

const BillBaloon: FC<Props> = memo(({ className, bill, direction }) => {
    return (
        <div className={`flex w-full ${direction === 'left' ? 'justify-start' : 'justify-end'} ${className}`}>
            <Baloon direction={direction}>
                <>
                    <p>{bill.subject}</p>
                    <Yen amountClassName="text-lg" yenClassName="text-xs">
                        {bill.amount}
                    </Yen>
                </>
            </Baloon>
        </div>
    );
});

BillBaloon.displayName = 'BillBaloon';
export { BillBaloon };
