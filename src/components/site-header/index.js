import React from 'react';
import { layout } from '~/theme';
import { Wrapper, InnerWrap, Strapline } from './index.styles';
import SiteLogo from '~/components/site-logo';
import PropTypes from 'prop-types';
import VisuallyHidden from '~/components/utilities/visually-hidden';

const SiteHeader = (props) => {
    return (
        <Wrapper data-test="site-header" isScrolled={props.isScrolled}>
            <layout.Wrap>
                <InnerWrap>
                    <SiteLogo isScrolled={props.isScrolled} />
                    <VisuallyHidden>
                        <Strapline
                            data-test="site-header__strapline"
                            isScrolled={props.isScrolled}
                        >
                            <span>Web Design &amp; Development by </span>
                            <span>Simon Hudson</span>
                        </Strapline>
                    </VisuallyHidden>
                </InnerWrap>
            </layout.Wrap>
        </Wrapper>
    );
};

SiteHeader.propTypes = {
    isScrolled: PropTypes.bool,
};

export default SiteHeader;
