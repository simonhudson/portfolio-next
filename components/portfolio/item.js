'use strict';

import React, { Component } from 'react';
import ItemLink from './item-link';

class Item extends Component {

    constructor(props) {
		super(props);
	}

    componentDidMount = () => {
        
    }
    
    generateCopyMarkup = () => {
        if (this.props.omitText) return null;
        let paragraphs = [];
        this.props.text.map((item, index) => paragraphs.push(`<p>${item}</p>`));
        return paragraphs.join(' ');
    }

    renderMadeWith = () => {
        return (
            <ul className="portfolio-item__made-with">				
                {this.props.madeWith.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        );
    };
    
    renderGitHub = () => {
        if (!this.props.github) return null;
        return (
            <a className="btn--primary--hollow portfolio-item__link" href={`http://www.github.com/simonhudson/${this.props.github}`} rel="noopener noreferrer" target="_blank">
                View <span className="visually-hidden">{this.props.title}</span> on Github
            </a>
        );
    };

    render = () => {
        
        const { props } = this;
        
        const {
            github,
            madeWith,
            omit,
            slug,
            text,
            title,
            url
        } = props;
        
        if (omit) return null;
        
        return (
            <div className={`portfolio-item`}>
                <div className="portfolio-item__img">
                    <img alt={`Screen grab of ${title} project`} src="http://placehold.it/350x150" />
                </div>
                <div className="portfolio-item__content">
                    <div className="portfolio-item__info">
                        <h2 className="portfolio-item__title">{title}</h2>
                        {this.renderMadeWith()}
                    </div>
                    <div className="portfolio-item__links">
                        <ItemLink
                            href={url}
                            title={`${title} site`}
                            icon="link"
                        />
                        {github && (
                            <ItemLink
                                href={github}
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
    }
}

export default Item;
