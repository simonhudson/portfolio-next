import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
class Layout extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta
						name="description"
						content="Personal site of Simon Hudson, a UI developer based in Derby, UK"
					/>
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<link
						href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&amp;family=Open+Sans:wght@300;400;600;700&amp;display=swap"
						rel="stylesheet"
					/>
					<script src="https://kit.fontawesome.com/6331124e0b.js" crossOrigin="anonymous"></script>
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
