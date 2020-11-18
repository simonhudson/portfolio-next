import React from 'react';
import SiteLogo from '~/components/site-logo';
import { FooterWrap, InnerWrap } from './index.styles';
import { layout } from '~/theme';

const SiteFooter = () => {
    return (
        <FooterWrap id="site-footer" data-test="site-footer">
            <layout.Wrap>
                <InnerWrap></InnerWrap>
                <SiteLogo context="footer" />
            </layout.Wrap>
        </FooterWrap>
    );
};

export default SiteFooter;
