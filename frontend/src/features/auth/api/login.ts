type LoginPayload = {
    email: string;
    password: string;
};

type LoginResponse = {
    accessToken: string;
    expiresAt: string;
};

export const login: (paylaod: LoginPayload) => Promise<LoginResponse> = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                accessToken: 'dummy',
                expiresAt: 'hm',
            });
        }, 500);
    });
};
