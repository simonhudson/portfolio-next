import React from 'react';
import Portfolio from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('Portfolio', () => {
    let objectUnderTest;
    const selector = `div[data-test="portfolio"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = () => (objectUnderTest = mountWithTheme(<Portfolio />));
});
