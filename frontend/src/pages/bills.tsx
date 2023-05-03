import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ErrorFallback';
import { Header } from '../components/header';
import { LoadingAnnimation } from '../components/loadingAnnimation';
import { BillForm } from '../features/bill/components/billForm';
import { Bills } from '../features/bill/components/bills';
import { BillTotalButtonWithModal } from '../features/bill/components/billTotalButtonWithModal';

export const BillsPage: FC = () => {
    return (
        <>
            <Header />
            <div className="w-full">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingAnnimation />}>
                        <BillTotalButtonWithModal />
                    </Suspense>
                </ErrorBoundary>
            </div>
            <div className="h-full w-full grow overflow-y-auto overflow-x-hidden bg-slate-300 p-5">
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingAnnimation />}>
                        <Bills />
                    </Suspense>
                </ErrorBoundary>
            </div>
            <div className="p-4">
                <BillForm />
            </div>
        </>
    );
};
