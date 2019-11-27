'use strict';

import React, { Component } from 'react';
import Item from './item';
import data from './portfolio.json';
import './css/styles.scss';

const debounce = (func, wait = 20, immediate = true) => {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioItems: null
        };
    }

    doSlide = () => {
        this.state.portfolioItems.forEach((item, index) => {
            const itemHeight = item.getBoundingClientRect().height;
            const itemOffsetTop = item.offsetTop;
            const slideInAt = (window.scrollY + window.innerHeight) - itemHeight / 8;
            const itemBottom = itemOffsetTop + itemHeight;
            const isHalfShown = slideInAt > itemOffsetTop;
            const isNotScrolledPast = window.scrollY < itemBottom;
            const className = 'active';
            if (isHalfShown && isNotScrolledPast) item.classList.add('active');
        });
    }

    addEventListeners = () => {
        window.addEventListener('scroll', debounce(this.doSlide));
    }

    componentDidMount = () => {
        this.setState({ portfolioItems: [...document.querySelectorAll('.portfolio-item')] });
        this.addEventListeners();
    }

	render = () => {
        return (
    		<div className="portfolio__wrap wrap">
    			<main className="portfolio">
    				<h2 className="visually-hidden">Portfolio</h2>
    				{data.map((item, index) => <Item key={`item--${index}`}	{...item} index={index} />)}
    			</main>
    		</div>
    	);
    }

};

export default Portfolio;
