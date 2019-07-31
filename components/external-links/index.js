'use strict';

import React from 'react';
import LinkItem from './item';
import links from './links.json';

const ExternalLinks = props => {

	return (
		<ul className="external-links">
			{links.map((item, index) => <LinkItem key={`item--${index}`} {...item} />)}
		</ul>
	);

};

export default ExternalLinks;
