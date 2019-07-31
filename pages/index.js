'use strict';

import Head from 'next/head';
import SiteHeader from 'components/site-header';

import 'static/css/styles.scss';

export default () => (
	
	<html>
		<Head>
			<title></title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta http-equiv="X-UA-Compatible" content="ie=edge" />
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Lora:400,700&display=swap" rel="stylesheet" />
			<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
		</Head>
		<body>
			<SiteHeader />
		</body>
	</html>
	
);
