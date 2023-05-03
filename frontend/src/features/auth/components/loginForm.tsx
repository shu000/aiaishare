import { FC, memo, useCallback } from 'react';
import { Button } from '../../../components/button';
import { TextInput } from '../../../components/textInput';
import { useFormState } from '../../../hooks/useFormState';

const LoginForm: FC = memo(() => {
    const emailFormState = useFormState('');
    const passwordFormState = useFormState('');

    const handleSubmit = useCallback(async () => {
        // FIXME PLZ
        if (emailFormState.value === '' || passwordFormState.value === '') {
            return;
        }

        // login

        emailFormState.onChange('');
        passwordFormState.onChange('');
    }, [emailFormState, passwordFormState]);

    return (
        <div>
            <div className="mb-2 flex items-center">
                <label htmlFor="email" className="shrink-0">
                    メールアドレス
                </label>
                <TextInput
                    id="email"
                    type="email"
                    className="ml-1 mr-4 w-full"
                    value={emailFormState.value}
                    error={emailFormState.error}
                    onChange={emailFormState.onChange}
                />
            </div>
            <div className="mb-2 flex items-center">
                <label htmlFor="password" className="shrink-0">
                    パスワード
                </label>
                <TextInput
                    id="password"
                    className="ml-1 mr-4 w-full"
                    type="password"
                    value={emailFormState.value}
                    error={emailFormState.error}
                    onChange={emailFormState.onChange}
                />
            </div>
            <div className="flex justify-end">
                <Button onClick={handleSubmit} disabled={!!emailFormState.error && !!passwordFormState.error}>
                    ログイン
                </Button>
            </div>
        </div>
    );
});

LoginForm.displayName = 'LoginForm';
export { LoginForm };
