import React from 'react';
import SiteHeader from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('SiteHeader', () => {
    let objectUnderTest;
    const selector = `div[data-test="site-header"]`;
    const strapline = `p[data-test="site-header__strapline"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, [selector, strapline]);
    });

    it('should render with expected strapline', () => {
        initialise();
        expect(objectUnderTest.find(strapline).text()).toEqual(
            'Web Design & Development by Simon Hudson'
        );
    });

    const initialise = (props) =>
        (objectUnderTest = mountWithTheme(<SiteHeader />));
});
