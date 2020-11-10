import React from 'react';
import { layout } from '~/theme';
import SiteHeader from '~/components/site-header';
import Portfolio from '~/components/portfolio';

const Home = () => {
    return (
        <>
            <SiteHeader />
            <layout.Wrap>
                <Portfolio />
            </layout.Wrap>
        </>
    );
};

export default Home;
