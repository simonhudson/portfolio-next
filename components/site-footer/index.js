'use strict';

import React from 'react';
import SiteLogo from 'components/site-logo';
import css from './css/styles.scss';

const getNowDate = () => {
	const now = new Date();
	return now;
}

const SiteFooter = props => {

	return (
		<div className="band">
			<footer className="site-footer wrap">
				<SiteLogo context="footer" />
				<p className="site-footer__copyright">&copy; Simon Hudson {getNowDate().getFullYear()}</p>
			</footer>
		</div>
	);

};

export default SiteFooter;
