import { ChangeEvent, FC, memo, useCallback } from 'react';

type Props = {
    className?: string;
    id?: string;
    type?: 'text' | 'email' | 'password';
    value: string;
    error?: string;
    onChange?: (value: string) => void;
};

const TextInput: FC<Props> = memo(({ className, id, type = 'text', value, error, onChange }) => {
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(event.target.value);
            }
        },
        [onChange]
    );

    return (
        <div className={className}>
            <input
                className="w-full rounded-md border-2 p-1"
                id={id}
                type={type}
                value={value}
                onChange={handleChange}
            ></input>
        </div>
    );
});

TextInput.displayName = 'TextInput';
export { TextInput };
