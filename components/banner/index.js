'use strict';

import React from 'react';
import ExternalLinks from 'components/external-links';
import './css/styles.scss';

const Banner = props => {

	return (
		<div className="band banner__outer">
			<div className="banner wrap">
				<div className="banner__primary">
					<h1 className="banner__title">
						<span>Hi there, my name's Simon.&nbsp;</span>
						I am an experienced <strong>front-end developer</strong> who specialises in writing lean, standards-compliant <strong>HTML</strong>, <strong>CSS</strong> and <strong>JavaScript</strong> to create <strong>accessible</strong> and <strong>usable</strong> websites and applications.
					</h1>
					<ExternalLinks />
				</div>
			</div>
		</div>
	);

};

export default Banner;
