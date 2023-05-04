import { ChangeEvent, FC, memo, useCallback } from 'react';
import { localize } from '../utils/localize';

type Props = {
    className?: string;
    id?: string;
    value: string;
    onChange?: (value: string) => void;
};

const MoneyInput: FC<Props> = memo(({ className, id, value, onChange }) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (!onChange) {
                return;
            }

            // 数字以外を除く
            const numericValue = event.target.value.replaceAll(/[^\d]+/g, '');
            if (numericValue === '') {
                onChange('');
                return;
            }

            // 先頭の0を除く
            const numberValue = Number(numericValue);

            onChange(numberValue.toString());
        },
        [onChange]
    );

    return (
        <input
            className={`rounded-md border-2 p-1 ${className}`}
            id={id}
            type="text"
            inputMode="numeric"
            value={localize(value)}
            onChange={handleChange}
        ></input>
    );
});

MoneyInput.displayName = 'MoneyInput';
export { MoneyInput };
