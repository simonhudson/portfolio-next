import React from 'react';
import { layout } from '~/theme';
import { Wrapper, InnerWrap, Strapline } from './index.styles';
import SiteLogo from '~/components/site-logo';

const SiteHeader = () => {
    return (
        <Wrapper data-test="site-header" id="site-header">
            <layout.Wrap>
                <InnerWrap>
                    <SiteLogo />
                    <Strapline data-test="site-header__strapline">
                        <span>Web Design &amp; Development by </span>
                        <span>Simon Hudson</span>
                    </Strapline>
                </InnerWrap>
            </layout.Wrap>
        </Wrapper>
    );
};

export default SiteHeader;
