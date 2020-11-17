import React from 'react';
import { layout } from '~/theme';
import { Wrapper, InnerWrap, Strapline } from './index.styles';
import SiteLogo from '~/components/site-logo';

const SiteHeader = (props) => {
    return (
        <Wrapper
            data-test="site-header"
            id="site-header"
            isScrolled={props.isScrolled}
        >
            <layout.Wrap>
                <InnerWrap>
                    <SiteLogo isScrolled={props.isScrolled} />
                    <Strapline
                        data-test="site-header__strapline"
                        isScrolled={props.isScrolled}
                    >
                        <span>Web Design &amp; Development by </span>
                        <span>Simon Hudson</span>
                    </Strapline>
                </InnerWrap>
            </layout.Wrap>
        </Wrapper>
    );
};

export default SiteHeader;
