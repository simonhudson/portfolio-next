'use strict';

import React from 'react';
import logo from './imgs/logo.svg';
import './css/styles.scss';

const setContextClass = (context) => {
    if (context) return `site-logo--${context}`;
    return '';
};

const scrollToTop = (e) => {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    const targetElement = document.getElementById('top');
    if (!targetElement) return;
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const SiteLogo = (props) => {
    const markup = (
        <img
            data-test={`${setContextClass(props.context)}`}
            alt=""
            className={`site-logo ${setContextClass(props.context)}`}
            src={logo}
        />
    );

    if (props.context === 'footer') {
        return (
            <>
                <a href="#top" onClick={(e) => scrollToTop(e)}>
                    <span class="visually-hidden">Top of page</span>
                    {markup}
                </a>
            </>
        );
    }

    return markup;
};

export default SiteLogo;
