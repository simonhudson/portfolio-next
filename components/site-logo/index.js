'use strict';

import React from 'react';
import logo from './imgs/logo.svg';
import './css/styles.scss';

const setContextClass = context => {
	if (context) return `site-logo--${context}`;
	return '';
};

const SiteLogo = props => {
	
	return (
		<img alt="" className={`site-logo ${setContextClass(props.context)}`} src={logo} />
	);

};

export default SiteLogo;
