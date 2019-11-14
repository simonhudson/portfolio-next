'use strict';

import React from 'react';
import ItemLink from './item-link';

const Item = props => {

	if (!props) return null;

	const {
		github,
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
		<div className={`portfolio-item`}>
			<div className="portfolio-item__img">
				<img alt={`Screen grab of ${title} project`} src="http://placehold.it/350x150" />
			</div>
			<div className="portfolio-item__content">
				<div className="portfolio-item__info">
					<h3 className="portfolio-item__title">{title}</h3>
					<h4 className="visually-hidden">Made with:</h4>
					<ul className="portfolio-item__made-with">
						{madeWith.map((item, index) => <li key={index}>{item}</li>)}
					</ul>
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
				<div className="portfolio-item__text" dangerouslySetInnerHTML={{ __html: this.generateCopyMarkup() }}>
				</div>
			</div>
		</div>
	);

};

export default Item;

// 'use strict';
//
// import React, { Component } from 'react';
// import ItemLink from './item-link';
//
// class Item extends Component {
//
//     constructor(props) {
// 		super(props);
// 	}
//
//     componentDidMount = () => {
//
//     }
//
//     generateCopyMarkup = () => {
//         if (this.props.omitText) return null;
//         let paragraphs = [];
//         this.props.text.map((item, index) => paragraphs.push(`<p>${item}</p>`));
//         return paragraphs.join(' ');
//     }
//
//     render = () => {
//
//         const { props } = this;
//
//         const {
//             github,
//             madeWith,
//             omit,
//             slug,
//             text,
//             title,
//             url
//         } = props;
//
//         if (omit) return null;
//
//         return (
//             <div className={`portfolio-item`}>
//                 <div className="portfolio-item__img">
//                     <img alt={`Screen grab of ${title} project`} src="http://placehold.it/350x150" />
//                 </div>
//                 <div className="portfolio-item__content">
//                     <div className="portfolio-item__info">
//                         <h3 className="portfolio-item__title">{title}</h3>
//                         <h4 className="visually-hidden">Made with:</h4>
//                         <ul className="portfolio-item__made-with">
//                             {madeWith.map((item, index) => <li key={index}>{item}</li>)}
//                         </ul>
//                     </div>
//                     <div className="portfolio-item__links">
//                         {url && (
//                             <ItemLink
//                                 href={url}
//                                 title={`${title} site`}
//                                 icon="link"
//                             />
//                         )}
//                         {github && (
//                             <ItemLink
//                                 href={`https://github.com/simonhudson/${github}`}
//                                 title={`${title} Github repository`}
//                                 icon="github"
//                             />
//                         )}
//                     </div>
//                     <div className="portfolio-item__text" dangerouslySetInnerHTML={{ __html: this.generateCopyMarkup() }}>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Item;
