import { FC } from 'react';

type Props = { error: Error };

export const ErrorFallback: FC<Props> = ({ error }) => {
    console.log(error);
    return <div>予期しないエラーが発生しました。画面を更新してください。</div>;
};
