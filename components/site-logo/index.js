'use strict';

import React from 'react';
import logo from './imgs/logo.svg';
import css from './css/styles.scss';

const SiteLogo = props => {
	
	return (
		<img alt="" className={`site-logo site-logo--${props.context}`} src={logo} />
	);

};

export default SiteLogo;
