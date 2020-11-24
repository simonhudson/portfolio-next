import React from 'react';
import SiteLogo from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('SiteLogo', () => {
    let objectUnderTest;
    const selector = `svg[data-test="site-logo"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, selector);
    });

    const initialise = () => (objectUnderTest = mountWithTheme(<SiteLogo />));
});
