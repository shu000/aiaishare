import { FC, memo, ReactNode } from 'react';

type Props = {
    className?: string;
    children?: ReactNode;
    direction: 'right' | 'left';
};

const Baloon: FC<Props> = memo(({ className, children, direction }) => {
    const leftArrowStyle = {
        top: '50%',
        left: '-25px',
        marginTop: '-15px',
        border: '15px solid transparent',
        borderRightWidth: '15px',
        borderRightColor: 'inherit',
    };

    const rightArrowStyle = {
        top: '50%',
        right: '-25px',
        marginTop: '-15px',
        border: '15px solid transparent',
        borderLeftWidth: '15px',
        borderLeftColor: 'inherit',
    };

    return (
        <div className={`relative w-max rounded-lg border-white bg-white p-3 ${className}`}>
            <>
                {children}
                <div className="absolute" style={direction === 'left' ? leftArrowStyle : rightArrowStyle}></div>
            </>
        </div>
    );
});

Baloon.displayName = 'Baloon';
export { Baloon };
