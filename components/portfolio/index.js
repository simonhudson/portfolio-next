'use strict';

import React from 'react';
import Item from './item';
import data from './portfolio.json';
import './css/styles.scss';

const Portfolio = props => {
	
	return (
		<div className="portfolio__wrap wrap">
			<main className="portfolio">
				<h2 className="visually-hidden">Portfolio</h2>
				{data.map((item, index) => <Item key={`item--${index}`}	{...item} index={index} />)}
			</main>
		</div>
	);

};

export default Portfolio;
