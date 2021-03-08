import React from 'react';
import ExternalLink from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

const baseProps = {
    href: 'https://www.foo.com',
};

describe('ExternalLink', () => {
    let objectUnderTest;
    const selector = `a[data-test="external-link"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.prop('href')).toEqual('https://www.foo.com');
        expect(objectUnderTest.find('a').prop('target')).toEqual('_blank');
        expect(objectUnderTest.find('a').prop('rel')).toEqual(
            'noopener noreferrer'
        );
        expect(objectUnderTest.find('span').text()).toContain(
            '(opens in a new tab/window)'
        );
    });

    const initialise = (props) =>
        (objectUnderTest = mountWithTheme(<ExternalLink {...props} />));
});
