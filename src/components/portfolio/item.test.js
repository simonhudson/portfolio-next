import React from 'react';
import Item from './item';
const cloneDeep = require('lodash/cloneDeep');
import {
    assertElementExists,
    assertElementDoesNotExist,
    mountWithTheme,
} from '~/config/tests/utilities';

const baseProps = {
    slug: 'test-item',
    title: 'Test Item',
    client: 'Client',
    text: ['Text line 1', 'Text line 2'],
    url: 'https://www.foo.com',
    madeWith: ['HTML', 'CSS', 'Sass', 'JavaScript/jQuery', 'Angular', 'Swig'],
    date: '2014 — 2015',
};

describe('Item', () => {
    let objectUnderTest;
    const selector = `div[data-test="portfolio-item"]`;
    const title = `h2[data-test="portfolio-item__title"]`;
    const text = `div[data-test="portfolio-item__text"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
    });

    it('should not render if omit prop is true', () => {
        const props = cloneDeep(baseProps);
        props.omit = true;
        initialise(props);
        assertElementDoesNotExist(objectUnderTest, selector);
    });

    it('should render with expected title', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.find(title).text()).toEqual('Test Item');
    });

    it('should render with expected text', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        expect(objectUnderTest.find(text).html()).toContain(
            '<p>Text line 1</p>'
        );
        expect(objectUnderTest.find(text).html()).toContain(
            '<p>Text line 2</p>'
        );
    });

    it('should not render text when text is omitted', () => {
        const props = cloneDeep(baseProps);
        props.omitText;
        initialise(props);
        expect(objectUnderTest.find(text).html()).toBeNull;
    });

    const initialise = (props) =>
        (objectUnderTest = mountWithTheme(<Item {...props} />));
});
