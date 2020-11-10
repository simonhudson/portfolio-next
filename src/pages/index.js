import React from 'react';
import { layout } from '~/theme';
import SiteHeader from '~/components/site-header';

const Home = () => {
    return (
        <>
            <SiteHeader />
            <layout.Wrap></layout.Wrap>
        </>
    );
};

export default Home;
