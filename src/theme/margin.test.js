import margin from './margin';

describe('theme/margin', () => {
    it('should return expected values', () => {
        expect(margin).toEqual({
            default: '0.875rem',
            xsm: '0.21875rem',
            sm: '0.4375rem',
            md: '1.75rem',
            lg: '3.5rem',
            xlg: '5.25rem',
            xxlg: '7rem',
            xxxlg: '10.5rem',
        });
    });
});
