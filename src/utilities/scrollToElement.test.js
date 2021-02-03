import scrollToElement from './scrollToElement';

const EVENT = {
    preventDefault: jest.fn(),
    returnValue: null,
};

const DOCUMENT = {
    getElementById: jest.fn(),
};

const TARGET_ELEMENT = {
    scrollIntoView: jest.fn(),
};

describe('scrollToElement', () => {
    let e, targetId, document, targetElement;

    beforeEach(() => {
        e = EVENT;
        targetId = 'foo';
        document = DOCUMENT;
        targetElement = TARGET_ELEMENT;
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
        expect(targetElement.scrollIntoView).toHaveBeenCalledTimes(0);
    });

    it('should handle event where preventDefault() method does not exist', () => {
        delete e.preventDefault;
        scrollToElement(e, targetId);
        expect(e.preventDefault).not.toBeInstanceOf(Function);
        expect(e.returnValue).toEqual(false);
    });

    // it('should handle scenario where target element does not exist', () => {
    //     expect(targetElement.scrollIntoView).toHaveBeenCalledTimes(0);
    // });

    // it('should call scrollIntoView() method on target element', () => {
    //     document.getElementById.mockReturnValue(true);
    // });
});
