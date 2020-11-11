import padding from './padding';

describe('theme/padding', () => {
    it('should return expected values', () => {
        expect(padding).toEqual({
            default: '0.875rem',
            xsm: '0.21875rem',
            sm: '0.4375rem',
            md: '1.75rem',
            lg: '3.5rem',
            xlg: '5.25rem',
        });
    });
});
