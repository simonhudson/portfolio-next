'use strict';

import React from 'react';
import Item from './item';
import data from './portfolio.json';
import css from './css/styles.scss';

const Portfolio = props => {
	
	return (
		<div className="portfolio__wrap">
			<main className="portfolio">
				{data.map((item, index) => <Item key={`item--${index}`}	{...item} index={index} />)}
			</main>
		</div>
	);

};

export default Portfolio;
