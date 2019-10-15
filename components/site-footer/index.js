'use strict';

import React from 'react';
import SiteLogo from 'components/site-logo';
import About from 'components/about';
import './css/styles.scss';

const getYear = () => {
	const now = new Date();
	return now.getFullYear();
}

const SiteFooter = props => {

	return (
		<div className="band band--thin">
			<footer className="site-footer wrap">
				<About />
				<div className="site-footer__copyright">
					<SiteLogo context="footer" />
					<p className="site-footer__copyright-text">&copy; Simon Hudson {getYear()}</p>
				</div>
			</footer>
		</div>
	);

};

export default SiteFooter;
