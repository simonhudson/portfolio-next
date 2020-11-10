import React from 'react';
import { Logo } from './index.styles';
import logo from './logo.svg';

const SiteLogo = () => {
    return <Logo alt="" data-test="site-logo" src={logo} />;
};

export default SiteLogo;
