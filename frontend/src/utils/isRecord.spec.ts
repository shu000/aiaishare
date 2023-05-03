import { isRecord } from './isRecord';

describe('isRecord', () => {
    test('objectのときtrueであること', () => {
        expect(isRecord({})).toBe(true);
        expect(isRecord({ key: 'value' })).toBe(true);
        expect(isRecord([])).toBe(true);
    });

    test('object以外のときエラーになること', () => {
        expect(isRecord(null)).toBe(false);
        expect(isRecord(undefined)).toBe(false);
        expect(isRecord(0)).toBe(false);
        expect(isRecord('0')).toBe(false);
        expect(isRecord(true)).toBe(false);
        expect(
            isRecord(() => {
                return;
            })
        ).toBe(false);
        expect(
            isRecord(function () {
                return;
            })
        ).toBe(false);
    });
});
