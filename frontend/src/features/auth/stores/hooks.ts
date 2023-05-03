import { useRecoilValue } from 'recoil';
import { User } from '../../bill/models/user';
import { loginUserState } from './stores';

export const useLoginUser = (): User => {
    return useRecoilValue(loginUserState);
};
