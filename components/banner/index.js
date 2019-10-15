'use strict';

import React from 'react';
import ExternalLinks from 'components/external-links';
import './css/styles.scss';

const scrollToAbout = e => {
	e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	console.log(`>>> : ${1}`);
	document.getElementById('about').scrollIntoView({
		behavior: 'smooth', block: 'start'
	});
};

const Banner = props => {

	return (
		<div className="band banner__outer">
			<div className="banner wrap">
				<div className="banner__primary">
					<h1 className="banner__title">
						<span>Hi there, my name's Simon.&nbsp;</span>
						I am an experienced web designer/front-end developer who specialises in writing lean, standards-compliant HTML, CSS and JavaScript to create accessible and usable websites.
					</h1>
					<a className="btn--primary--hollow" href="#about" onClick={((e) => scrollToAbout(e))}>Want to know more?</a>
				</div>
			</div>
		</div>
	);

};

export default Banner;
