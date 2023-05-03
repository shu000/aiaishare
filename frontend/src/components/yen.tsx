import { FC, memo } from 'react';
import { localize } from '../utils/localize';

type Props = {
    className?: string;
    amountClassName?: string;
    yenClassName?: string;
    children: number;
};

const Yen: FC<Props> = memo(({ className, amountClassName, yenClassName, children }) => {
    return (
        <div className={`flex items-end ${className}`}>
            <p className={amountClassName}>{localize(children)}</p>
            <p className={yenClassName}>円</p>
        </div>
    );
});

Yen.displayName = 'Yen';
export { Yen };
