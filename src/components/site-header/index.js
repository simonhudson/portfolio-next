import React from 'react';
import { Wrapper, Strapline } from './index.styles';
import SiteLogo from '~/components/site-logo';

const SiteHeader = () => {
    return (
        <Wrapper>
            <SiteLogo />
            <Strapline>
                <span>Web Design &amp; Development by&nbsp;</span>
                <span>Simon Hudson</span>
            </Strapline>
        </Wrapper>
    );
};

export default SiteHeader;
