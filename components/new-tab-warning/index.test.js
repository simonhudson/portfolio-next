'use strict';

import React from 'react';
import { expect as chaiExpect } from 'chai';
import { shallow } from 'enzyme';
import cloneDeep from 'lodash/cloneDeep';
import NewTabWarning from './index';

describe('NewTabWarning', () => {
    
    let objectUnderTest;
    
	afterEach(() => if (objectUnderTest) objectUnderTest.unmount());
    
    it('should render as expected', () => {
        initialise();
        chaiExpect(objectUnderTest.html()).to.not.be.null;
    });

});

const initialise = () => {
    objectUnderTest = shallow(<NewTabWarning />);
};