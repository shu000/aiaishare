import { FC, memo, ReactNode, useCallback } from 'react';

type Props = {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
};

const NoStyleButton: FC<Props> = memo(({ className, children, disabled, onClick }) => {
    const handleClick = useCallback(() => {
        if (onClick && !disabled) {
            onClick();
        }
    }, [onClick, disabled]);

    return (
        <button className={className} type="button" disabled={disabled} onClick={handleClick}>
            {children}
        </button>
    );
});

NoStyleButton.displayName = 'NoStyleButton';
export { NoStyleButton };
