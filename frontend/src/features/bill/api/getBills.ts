import { Bill } from '../models/bill';

export const getBills: () => Promise<Bill[]> = () => {
    return new Promise((resolve, reject) => {
        console.log('api');
        setTimeout(() => {
            // reject(new Error('Failed to getBills'));
            resolve([
                {
                    id: '1',
                    subject: '食費',
                    amount: 9000,
                    billedBy: 'me',
                },
                {
                    id: '2',
                    subject: '食費',
                    amount: 9000,
                    billedBy: 'others',
                },
                {
                    id: '3',
                    subject: '食費',
                    amount: 9000,
                    billedBy: 'me',
                },
                {
                    id: '4',
                    subject: '食費',
                    amount: 9000,
                    billedBy: 'me',
                },
            ]);
        }, 500);
    });
};
