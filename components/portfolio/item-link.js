'use strict';

import React from 'react';
import Icon from 'components/icon';
import NewTabWarning from 'components/new-tab-warning';

const ItemLink = props => {

	if (!props) return null;

	return (
		<a className="portfolio-item__link" href={props.href} rel="noopener noreferrer" target="_blank">
			<span className="visually-hidden">View {props.title}</span>
			<NewTabWarning />
			<Icon type={props.icon} />
		</a>
	);

};

export default ItemLink;
