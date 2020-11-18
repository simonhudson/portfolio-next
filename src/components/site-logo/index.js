import React from 'react';
import { Logo } from './index.styles';
import logo from './logo.svg';
import scrollToElement from '~/utilities/scrollToElement';

const SiteLogo = (props) => {
    return (
        <Logo
            alt=""
            data-test="site-logo"
            onClick={(e) =>
                props.context === 'footer' ? scrollToElement(e, 'top') : null
            }
            src={logo}
            context={props.context}
            isScrolled={props.isScrolled}
        />
    );
};

export default SiteLogo;
