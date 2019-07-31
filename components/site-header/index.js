'use strict';

import React from 'react';
import SiteLogo from 'components/site-logo';
import css from './css/styles.scss';

const SiteHeader = props => {

	return (
		<div className="wrap">
			<header className="site-header">
				<SiteLogo />
				<p className="site-header__strap">
					<span>Web Design &amp; Development by&nbsp;</span>
					<span>Simon Hudson</span>
				</p>
			</header>
		</div>
	);

};

export default SiteHeader;

