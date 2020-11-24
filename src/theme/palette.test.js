import palette from './palette';

describe('theme/palette', () => {
    it('should return expected values', () => {
        expect(palette).toEqual({
            primary: {
                a: '#64848F',
                bodyText: '#202020',
                black: '#333',
                white: '#fff',
            },
            alert: {
                error: '#f00',
                info: '#015cae',
                success: '#01943b',
                warning: '#eeb320',
            },
        });
    });
});
