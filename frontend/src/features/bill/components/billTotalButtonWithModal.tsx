import { FC, memo, useCallback } from 'react';
import { Button } from '../../../components/button';
import { Modal } from '../../../components/modal';
import { Yen } from '../../../components/yen';
import { useModalState } from '../../../hooks/useModalState';
import { useCreateSettlementCommand } from '../states/useCreateSettlementCommand';
import { useTotalAmountQuery } from '../states/useTotalAmountQuery';
import { BillTotalButton } from './billTotalButton';

const BillTotalButtonWithModal: FC = memo(() => {
    const totalAmount = useTotalAmountQuery();
    const createSettlement = useCreateSettlementCommand();

    const { open, onOpen, onClose } = useModalState();

    const handleClick = useCallback(async () => {
        await createSettlement();
        onClose();
    }, [createSettlement, onClose]);

    return (
        <>
            <BillTotalButton onClick={onOpen} />
            <Modal className="p-4" open={open} onClose={onClose}>
                <Yen amountClassName="text-2xl">{totalAmount}</Yen>
                <p className="mb-4">の請求をすべて清算しますか？</p>
                <div className="flex justify-end">
                    <Button variant="cancel" onClick={onClose}>
                        やめる
                    </Button>
                    <Button className="ml-4" onClick={handleClick}>
                        清算する
                    </Button>
                </div>
            </Modal>
        </>
    );
});

BillTotalButtonWithModal.displayName = 'BillTotalButtonWithModal';
export { BillTotalButtonWithModal };
