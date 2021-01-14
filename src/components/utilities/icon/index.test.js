'use strict';

import React from 'react';
import Icon from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('Icon', () => {
    let objectUnderTest;
    const selector = `span[data-test="icon"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should solid icon render as expected', () => {
        initialise({ type: 'solid', name: 'external-link-alt' });
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).prop('className')).toEqual(
            'fas fa-external-link-alt'
        );
        expect(objectUnderTest.find(selector).prop('aria-hidden')).toEqual(
            'true'
        );
    });

    it('should brand icon render as expected', () => {
        initialise({ type: 'brand', name: 'github' });
        assertElementExists(objectUnderTest, selector);
        expect(objectUnderTest.find(selector).prop('className')).toEqual(
            'fab fa-github'
        );
        expect(objectUnderTest.find(selector).prop('aria-hidden')).toEqual(
            'true'
        );
    });

    const initialise = (props) =>
        (objectUnderTest = mountWithTheme(<Icon {...props} />));
});
