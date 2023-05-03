import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { FC, memo } from 'react';
import { NoStyleButton } from '../../../components/noStyleButton';
import { BillTotal } from './billTotal';

type Props = {
    onClick: () => void;
};

const BillTotalButton: FC<Props> = memo(({ onClick }) => {
    return (
        <NoStyleButton className="relative flex h-full w-full justify-center py-6" onClick={onClick}>
            <BillTotal />
            <div className="absolute top-6 right-3 w-10 grow-0">
                <ChevronRightIcon className="text-slate-500" />
            </div>
        </NoStyleButton>
    );
});

BillTotalButton.displayName = 'BillTotalButton';
export { BillTotalButton };
