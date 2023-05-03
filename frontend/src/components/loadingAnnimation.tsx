import { FC, memo } from 'react';

type Props = {
    className?: string;
};

const LoadingAnnimation: FC<Props> = memo(({ className }) => {
    return (
        <div className={`flex h-full w-full items-center justify-center ${className}`}>
            <div className="h-5 w-5 animate-spin rounded-full border-4 border-slate-800 border-t-transparent " />
        </div>
    );
});

LoadingAnnimation.displayName = 'LoadingAnnimation';
export { LoadingAnnimation };
