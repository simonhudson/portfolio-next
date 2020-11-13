import React, { Component } from 'react';
import { layout } from '~/theme';
import { Wrapper, InnerWrap, Strapline } from './index.styles';
import SiteLogo from '~/components/site-logo';

class SiteHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
        };
    }

    addEventListeners = () => {
        const html = document.querySelector('html');
        window.addEventListener('scroll', () =>
            this.setState({ isScrolled: html.scrollTop > 0 })
        );
    };

    componentDidMount = () => {
        this.addEventListeners();
    };

    render = () => {
        const { state } = this;
        return (
            <Wrapper
                data-test="site-header"
                id="site-header"
                isScrolled={state.isScrolled}
            >
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
}
export default SiteHeader;

// import React from 'react';
// import { layout } from '~/theme';
// import { Wrapper, InnerWrap, Strapline } from './index.styles';
// import SiteLogo from '~/components/site-logo';

// const SiteHeader = () => {
//     return (
//         <Wrapper data-test="site-header" id="site-header">
//             <layout.Wrap>
//                 <InnerWrap>
//                     <SiteLogo />
//                     <Strapline data-test="site-header__strapline">
//                         <span>Web Design &amp; Development by </span>
//                         <span>Simon Hudson</span>
//                     </Strapline>
//                 </InnerWrap>
//             </layout.Wrap>
//         </Wrapper>
//     );
// };

// export default SiteHeader;
