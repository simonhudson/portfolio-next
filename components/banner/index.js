'use strict';

import React from 'react';
import css from './css/styles.scss';

const Banner = props => {

	return (
		<div className="band banner__outer">
			<div className="banner wrap">
				<div className="banner__primary">
					<h1 className="banner__title"><span>Hi there, my name's Simon.&nbsp;</span>I am an experienced web designer/front-end developer who specialises in writing lean, standards-compliant HTML, CSS and JavaScript to create accessible and usable websites.</h1>
				</div>
			</div>
		</div>
	);

};

export default Banner;
