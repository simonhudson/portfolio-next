import React from 'react';
import SiteLogo from '~/components/site-logo';

const SiteFooter = () => {
    return (
        <div id="site-footer" data-test="site-footer">
            <p>FOOTER</p>
            <SiteLogo context="footer" />
        </div>
    );
};

export default SiteFooter;
