import palette from './palette';

describe('theme/palette', () => {
    it('should return expected values', () => {
        expect(palette).toEqual({
            primary: {
                brand: '#EC7114',
                brandDark10: '#be5a0f',
                bodyText: '#5d5d5d',
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
