import { FC, memo } from 'react';
import { UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid';

type Props = {
    className?: string;
};

const Header: FC<Props> = memo(({ className }) => {
    return (
        <div className={`flex w-full justify-between bg-slate-100 ${className}`}>
            <div className="w-10 grow-0">
                <UserCircleIcon className="text-slate-500" />
            </div>
            <div className="w-10 grow-0">
                <Bars3Icon className="text-slate-500" />
            </div>
        </div>
    );
});

Header.displayName = 'Header';
export { Header };
