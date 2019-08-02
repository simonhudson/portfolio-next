'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import Icon from './index';

describe('Icon', () => {
    
    it('renders null when no type is passed', () => {
        const objectToTest = shallow(<Icon />);
        expect(objectToTest.to.equal(null));
    });
    
    it('renders when type is passed', () => {
        const objectToTest = shallow(<Icon type="github" />);
        expect(objectToTest.to.not.equal(null));
    });
    
});
