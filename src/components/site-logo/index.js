import React from 'react';
import { Logo } from './index.styles';
import logo from './logo.svg';
import scrollToElement from '~/utilities/scrollToElement';

const SiteLogo = (props) => {
    if (props.context === 'footer')
        return (
            <Logo
                alt=""
                data-test="site-logo"
                onClick={(e) => scrollToElement(e, 'site-header')}
                src={logo}
                context={props.context}
            />
        );
    return <Logo alt="" data-test="site-logo" src={logo} />;
};

export default SiteLogo;
