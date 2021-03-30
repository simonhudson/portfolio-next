import React from 'react';
import { layout } from '~/theme';
import { H1, H2 } from '~/theme/typography';

const Error404 = () => {
	return (
		<layout.Wrap>
			<H1>Page not found</H1>
			<H2>
				Looks like we couldn&apos;t find that page. Would you like to <a href="/"> go back to the home page?</a>
			</H2>
		</layout.Wrap>
	);
};

export default Error404;
