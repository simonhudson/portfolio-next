'use strict';

import React from 'react';
import SiteLogo from 'components/site-logo';
import './css/styles.scss';

const getYear = () => {
	const now = new Date();
	return now.getFullYear();
}

const SiteFooter = props => {

	return (
		<div className="band band--thin">
			<footer className="site-footer wrap">
				<SiteLogo context="footer" />
				<p className="site-footer__copyright">&copy; Simon Hudson {getYear()}</p>
			</footer>
		</div>
	);

};

export default SiteFooter;
