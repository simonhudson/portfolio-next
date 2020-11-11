import React from 'react';
import { layout } from '~/theme';
import SiteHeader from '~/components/site-header';
import Hero from '~/components/hero';
import Portfolio from '~/components/portfolio';

const Home = () => {
    return (
        <>
            <SiteHeader />
            <Hero />
            <layout.Wrap>
                <Portfolio />
            </layout.Wrap>
        </>
    );
};

export default Home;
