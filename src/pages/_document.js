import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class Layout extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&amp;family=Open+Sans:wght@300;400;600;700&amp;display=swap"
                        rel="stylesheet"
                    />
                    <link href="/css/reset.css" rel="stylesheet" />
                </Head>
                <body id="top">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Layout;
