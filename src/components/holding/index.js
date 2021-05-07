import React from 'react';
import { Wrapper, Tagline } from './index.styles';
import SiteLogo from '~/components/site-logo';

const Holding = () => {
	return (
		<Wrapper>
			<SiteLogo width={400} />
			<Tagline>
				<span>Web Design &amp; Development by&nbsp;</span>
				<span>Simon Hudson</span>
			</Tagline>
		</Wrapper>
	);
};

export default Holding;
