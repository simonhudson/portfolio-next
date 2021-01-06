import React from 'react';
import Hero from './index';
import { assertElementExists, mountWithTheme } from '~/config/tests/utilities';

describe('Hero', () => {
    let objectUnderTest;
    const selector = `div[data-test="hero"]`;
    const title = `h1[data-test="hero__title"]`;

    afterEach(() => (!!objectUnderTest ? objectUnderTest.unmount() : null));

    it('should render as expected', () => {
        initialise();
        assertElementExists(objectUnderTest, [selector, title]);
    });

    const initialise = () => (objectUnderTest = mountWithTheme(<Hero />));
});
