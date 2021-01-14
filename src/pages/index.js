import React, { Component } from 'react';
import { layout } from '~/theme';
import SiteHeader from '~/components/site-header';
import Hero from '~/components/hero';
import Portfolio from '~/components/portfolio';
import SiteFooter from '~/components/site-footer';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            hidePortfolio: true,
        };
    }

    addEventListeners = () => {
        const html = document.querySelector('html');
        window.addEventListener('scroll', () =>
            this.setState({ isScrolled: html.scrollTop > 2 })
        );
    };

    componentDidMount = () => {
        this.addEventListeners();
    };

    render = () => {
        const { state } = this;
        return (
            <>
                <SiteHeader isScrolled={state.isScrolled} />
                <Hero />
                <layout.Wrap>
                    {!state.hidePortfolio && <Portfolio />}
                </layout.Wrap>
                {!state.hidePortfolio && <SiteFooter />}
            </>
        );
    };
}
export default Home;
