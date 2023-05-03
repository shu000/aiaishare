import { FC, memo, ReactNode } from 'react';

type Props = {
    className?: string;
    children?: ReactNode;
    error?: string;
};

const WithErrorMessage: FC<Props> = memo(({ className, children, error }) => {
    return (
        <div className={className}>
            {children}
            <p>{error}</p>
        </div>
    );
});

WithErrorMessage.displayName = 'WithErrorMessage';
export { WithErrorMessage };
