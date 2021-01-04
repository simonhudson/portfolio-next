import scrollToElement from './scrollToElement';

const EVENT = {
    preventDefault: jest.fn(),
    returnValue: null,
};

describe('scrollToElement', () => {
    let e, targetId;

    beforeEach(() => {
        e = EVENT;
        targetId = 'foo';
        jest.spyOn(document, 'getElementById');
        document.getElementById.mockReturnValue(null);
    });

    afterEach(() => {
        document.getElementById.mockRestore();
    });

    it('should handle event where preventDefault() method exists', () => {
        scrollToElement(e, targetId);
        expect(e.preventDefault).toHaveBeenCalledTimes(1);
        expect(e.returnValue).toEqual(null);
    });

    it('should handle event where preventDefault() method does not exist', () => {
        delete e.preventDefault;
        scrollToElement(e, targetId);
        expect(e.preventDefault).not.toBeInstanceOf(Function);
        expect(e.returnValue).toEqual(false);
    });

    it('should handle scenario where target element does not exist', () => {});

    it('should call scrollIntoView() method on target element', () => {});
});
