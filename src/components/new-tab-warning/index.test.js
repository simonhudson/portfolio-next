import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NewTabWarning from './index';

describe('NewTabWarning', () => {
    let objectUnderTest;
    const selector = `[data-test="new-tab-warning"]`;

    it('should render as expected', () => {
        initialise();
        expect(objectUnderTest.html()).to.not.be.null;
        expect(objectUnderTest.exists(selector)).to.be.true;
        expect(objectUnderTest.find(selector).length).to.equal(1);
    });

    const initialise = () => (objectUnderTest = shallow(<NewTabWarning />));
});
