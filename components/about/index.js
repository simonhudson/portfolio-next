'use strict';

import React from 'react';
import ExternalLinks from 'components/external-links';
import selfImg from '../../static/imgs/self.jpg';
import './css/styles.scss';

const About = props => {

	if (!props) return null;

	return (
		<div className="about" id="about">
			<div className="about__content">
				<img alt="Simon Hudson enjoying a beer in Las Vegas" className="about__img" src={selfImg} />
				<div className="about__text">
					<h2>A bit more about me...</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan velit id dictum convallis. Sed magna dui, lacinia non tellus sed, tempor tincidunt nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc accumsan odio in leo blandit elementum. Nunc nec posuere lorem. Etiam rutrum nunc ut urna facilisis lobortis. Integer id lacus quis est bibendum mollis id eu tortor. Nunc tristique elementum elit. Nunc eu lacinia odio, eget viverra ex. Mauris vel ipsum eget sapien mattis sodales et a ante.</p>
				</div>
				<div className="about__links">
					<ExternalLinks />
				</div>
			</div>
		</div>
	);

};

export default About;
