import { FC, memo, useCallback } from 'react';

type Variant = 'normal' | 'cancel';

type Props = {
    className?: string;
    children?: string;
    disabled?: boolean;
    onClick?: () => void;
    variant?: Variant;
};

const Button: FC<Props> = memo(({ className, children, disabled, onClick, variant = 'normal' }) => {
    const handleClick = useCallback(() => {
        if (onClick && !disabled) {
            onClick();
        }
    }, [onClick, disabled]);

    // FIXME tailwindのsuggenstionが効かない variantが増えたらだるい
    const baseClassName = `rounded-md py-1 px-2 text-lg text-white shadow ${className}`;
    const normalClassName = 'bg-slate-500 text-white';
    const cancelClassName = 'text-slate-500';

    return (
        <button
            className={`${baseClassName} ${variant === 'normal' ? normalClassName : cancelClassName}`}
            type="button"
            disabled={disabled}
            onClick={handleClick}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export { Button };
