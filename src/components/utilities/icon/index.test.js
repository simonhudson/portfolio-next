'use strict';

import React from 'react';
import Icon from './index';
const cloneDeep = require('lodash/cloneDeep');
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

const baseProps = {
    type: 'external-link-alt',
};

describe('Icon', () => {
    let objectUnderTest;
    const selector = `span[data-test="icon"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        const props = cloneDeep(baseProps);
        initialise(props);
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).prop('className')).toEqual(
            'fas fa-external-link-alt'
        );
        expect(objectUnderTest.find(selector).prop('aria-hidden')).toEqual(
            'true'
        );
    });

    const initialise = (props) =>
        (objectUnderTest = mountWithTheme(<Icon {...props} />));
});
