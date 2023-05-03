/* eslint-disable @typescript-eslint/no-explicit-any */

// https://www.asobou.co.jp/blog/web/error-boundary
// https://github.com/facebook/react/issues/14981
// https://github.com/bvaughn/react-error-boundary#useerrorhandlererror-unknown

import React, { ReactNode } from 'react';

export class TopLevelErrorBoundary extends React.Component<{ children?: ReactNode }, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidMount() {
        window.addEventListener('unhandledrejection', this.onUnhandledRejection);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.onUnhandledRejection);
    }

    onUnhandledRejection = (event: PromiseRejectionEvent) => {
        event.promise.catch(() => {
            this.setState(TopLevelErrorBoundary.getDerivedStateFromError());
        });
    };

    componentDidCatch(error: any, errorInfo: any) {
        console.log('Unexpected error occurred!', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full bg-slate-300 p-5">
                    <p className="mb-5">通信エラーが発生しました。しばらく待ってからやり直してください。</p>
                    <div className="flex justify-center">
                        <a className="underline" href="/">
                            画面を更新する
                        </a>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
