'use strict';

import React from 'react';
import logo from './imgs/logo.svg';
import './css/styles.scss';

const setContextClass = context => {
	if (context) return `site-logo--${context}`;
	return '';
};

const scrollToTop = e => {
	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	const targetElement = document.getElementById('top');
	if (!targetElement) return;
	targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const SiteLogo = props => {

	if (props.context === 'footer') {
		return (
			<>
				<a href="#" onClick={((e) => scrollToTop(e))}>
					<img alt="" className={`site-logo ${setContextClass(props.context)}`} src={logo} />
				</a>
			</>
		)
	}

	return (
		<img alt="" className={`site-logo ${setContextClass(props.context)}`} src={logo} />
	);

};

export default SiteLogo;
