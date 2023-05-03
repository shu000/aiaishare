import { atom } from 'recoil';

export const loginUserState = atom({
    key: 'loginUserState',
    default: {
        id: 'me',
        name: 'miyagon',
    },
});
