import React from 'react';
import { layout } from '~/theme';
import { Wrapper, InnerWrap, Strapline } from './index.styles';
import SiteLogo from '~/components/site-logo';

const SiteHeader = () => {
    return (
        <Wrapper>
            <layout.Wrap>
                <InnerWrap>
                    <SiteLogo />
                    <Strapline>
                        <span>Web Design &amp; Development by&nbsp;</span>
                        <span>Simon Hudson</span>
                    </Strapline>
                </InnerWrap>
            </layout.Wrap>
        </Wrapper>
    );
};

export default SiteHeader;
