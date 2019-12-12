'use strict';

import React from 'react';
import ItemLink from './item-link';

const Item = props => {

	if (!props) return null;

	const {
		client,
		date,
		github,
		index,
		madeWith,
		omit,
		omitText,
		slug,
		text,
		title,
		url
	} = props;

	if (omit) return null;

	const generateCopyMarkup = () => {
        if (omitText) return null;
        let paragraphs = [];
        text.map((item, index) => paragraphs.push(`<p>${item}</p>`));
        return paragraphs.join(' ');
    };

	return (
		<div className={`portfolio-item ${index === 0 ? 'active' : ''}`}>
			<div className="portfolio-item__inner">
				<div className="portfolio-item__content">
					<div className="portfolio-item__info">
						<h3 className="portfolio-item__title">{title}</h3>
					</div>
					<div className="portfolio-item__text" dangerouslySetInnerHTML={{ __html: generateCopyMarkup() }}>
					</div>
					<div className="portfolio-item__links">
						{url && (
							<ItemLink
								href={url}
								title={`${title} site`}
								icon="link"
							/>
						)}
						{github && (
							<ItemLink
								href={`https://github.com/simonhudson/${github}`}
								title={`${title} Github repository`}
								icon="github"
							/>
						)}
					</div>
				</div>
				<div className="portfolio-item__img">
					<img alt={`Screen grab of ${title} project`} src={`../../../static/imgs/${slug}.png`} />
				</div>
			</div>
			<div className="portfolio-item__meta-wrap">
				<div className="portfolio-item__meta-inner">
					{client && (
						<div className="portfolio-item__meta portfolio-item__client">
							<h4 className="portfolio-item__meta-title">Client&nbsp;</h4>
							<span>{client}</span>
						</div>
					)}
					{date && (
						<div className="portfolio-item__meta portfolio-item__date">
							<h4 className="portfolio-item__meta-title">Date&nbsp;</h4>
							<span>{date}</span>
						</div>
					)}
					{madeWith && (
						<div className="portfolio-item__meta portfolio-item__made-with">
							<h4 className="portfolio-item__meta-title">Made with&nbsp;</h4>
							<ul>
								{madeWith.map((item, index) => <li key={index}>{item}</li>)}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);

};

export default Item;
