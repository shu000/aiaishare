import { FC, memo, ReactNode } from 'react';

type Props = {
    className?: string;
    children?: ReactNode;
    open: boolean;
    onClose: () => void;
};

const Modal: FC<Props> = memo(({ className, children, open, onClose }) => {
    return (
        <>
            {open && (
                <div
                    className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center overflow-hidden bg-slate-900/50"
                    onClick={onClose}
                >
                    <div
                        className={`rounded-md bg-white ${className}`}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
});

Modal.displayName = 'Modal';
export { Modal };
