import { FC, memo, useCallback } from 'react';
import { Button } from '../../../components/button';
import { MoneyInput } from '../../../components/moneyInput';
import { TextInput } from '../../../components/textInput';
import { useFormState } from '../../../hooks/useFormState';
import { useCreateBillCommand } from '../states/commends/useCreateBillCommand';

const BillForm: FC = memo(() => {
    const createBill = useCreateBillCommand();

    const subjectFormState = useFormState('');
    const amountFormState = useFormState('');

    const handleSubmit = useCallback(async () => {
        // FIXME PLZ
        if (subjectFormState.value === '' || amountFormState.value === '') {
            return;
        }

        await createBill({
            subject: subjectFormState.value,
            amount: parseInt(amountFormState.value),
        });

        subjectFormState.onChange('');
        amountFormState.onChange('');
    }, [subjectFormState, amountFormState, createBill]);

    return (
        <div>
            <div className="mb-2 flex items-center">
                <label htmlFor="subject" className="shrink-0">
                    品目
                </label>
                <TextInput
                    id="subject"
                    className="ml-1 mr-4 w-full"
                    value={subjectFormState.value}
                    error={subjectFormState.error}
                    onChange={subjectFormState.onChange}
                />
            </div>
            <div className="mb-2 flex items-center">
                <label htmlFor="amount" className="shrink-0">
                    金額
                </label>
                <MoneyInput
                    id="amount"
                    className="ml-1 w-full"
                    value={amountFormState.value}
                    onChange={amountFormState.onChange}
                />
                <p>円</p>
            </div>
            <div className="flex justify-end">
                <Button onClick={handleSubmit} disabled={!!subjectFormState.error && !!amountFormState.error}>
                    請求
                </Button>
            </div>
        </div>
    );
});

BillForm.displayName = 'BillForm';
export { BillForm };
