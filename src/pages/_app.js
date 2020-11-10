import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';

// Log accessibility issues to console in non-production environments
if (process.env.APP_ENV !== 'production' && typeof window !== 'undefined') {
    const ReactDOM = require('react-dom');
    const axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}

const App = ({ Component, pageProps }) => {
    const router = useRouter();
    pageProps.currentPage = {
        name: router.route === '/' ? 'home' : router.route.split('/')[1],
        query: router.query,
        route: router.route,
    };

    let pageTitle = 'Web Design & Development by Simon Hudson';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <ThemeProvider theme={Theme}>
                <main>
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </>
    );
};

export default App;
