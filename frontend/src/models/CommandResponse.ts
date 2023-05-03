import { isRecord } from '../utils/isRecord';

const httpStatusCodes = ['400', '401', '403', '404', '409', '500', '503'] as const;
type HTTPStatusCode = typeof httpStatusCodes[number];

type ApplicationError = {
    message: string;
};

type HTTPError = {
    code: HTTPStatusCode;
    message: string;
};

type CommandError = ApplicationError | HTTPError;

export type CommandResponse<T> = {
    data: T;
    error: CommandError | null;
    isLoading: boolean;
};

const isHTTPStatusCode = (x: unknown): x is HTTPStatusCode => {
    const codes: ReadonlyArray<string> = httpStatusCodes;
    return x != null && typeof x === 'string' && codes.includes(x);
};

export const isHTTPError = (x: unknown): x is HTTPError => {
    if (!isRecord(x)) {
        return false;
    }

    return isHTTPStatusCode(x.code) && x.message != null && typeof x.message === 'string';
};
