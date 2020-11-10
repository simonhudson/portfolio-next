import React from 'react';
import { layout, typography } from '~/theme';

const Home = (props) => {
    return (
        <layout.Wrap>
            <typography.H1>Simon Hudson.</typography.H1>
        </layout.Wrap>
    );
};

export default Home;

// // import Head from 'next/head';

// import Banner from 'components/banner';
// import Portfolio from 'components/portfolio';
// import SiteHeader from 'components/site-header';
// import SiteFooter from 'components/site-footer';

// import 'static/css/styles.scss';

// export default () => (
//     <html lang="en">
//         <Head>
//             <title>Web Design &amp; Development by Simon Hudson</title>
//             <meta
//                 name="viewport"
//                 content="initial-scale=1.0, width=device-width"
//             />
//             <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//             <link
//                 href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Lora:400,700&display=swap"
//                 rel="stylesheet"
//             />
//             <link
//                 href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
//                 rel="stylesheet"
//             />
//         </Head>
//         <body className="fade-in" id="top">
//             <main>
//                 <div className="full-viewport-height">
//                     <SiteHeader />
//                     <Banner />
//                 </div>
//                 <Portfolio />
//                 <SiteFooter />
//             </main>
//         </body>
//     </html>
// );
