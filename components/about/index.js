'use strict';

import React from 'react';
import './css/styles.scss';

const About = props => {

	if (!props) return null;

	return (
		<div className="about" id="about">
			<h2>A bit more about me...</h2>
		</div>
	);

};

export default About;
