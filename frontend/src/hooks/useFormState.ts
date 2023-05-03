import { useCallback, useState } from 'react';

type FormState<T> = {
    value: T;
    error: string;
    onChange: (value: T) => void;
    onError: (error: string) => void;
};

export const useFormState = <T>(defaultValue: T): FormState<T> => {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState('');

    const onChange = useCallback((v: T) => {
        setValue(v);
    }, []);

    const onError = useCallback((e: string) => {
        setError(e);
    }, []);

    return {
        value,
        error,
        onChange,
        onError,
    };
};
