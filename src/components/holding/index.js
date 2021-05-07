import React from 'react';
import { Wrapper, Tagline, LinksList, LinksItem, LinksLink } from './index.styles';
import SiteLogo from '~/components/site-logo';
import data from '~/components/links/data';
import VisuallyHidden from '~/components/utilities/visually-hidden';

const Holding = () => {
	return (
		<Wrapper>
			<SiteLogo width={400} />
			<Tagline>
				<span>Web Design &amp; Development by&nbsp;</span>
				<span>Simon Hudson</span>
			</Tagline>
			<LinksList>
				{data.map((item, index) => (
					<LinksItem key={index}>
						<LinksLink href={item.url} target="_blank" rel="noopener noreferrer">
							<VisuallyHidden>Visit my&nbsp;</VisuallyHidden>
							{item.linkText}
							<VisuallyHidden>&nbsp;profile</VisuallyHidden>
							<VisuallyHidden>&nbsp;(opens in a new tab/window)</VisuallyHidden>
						</LinksLink>
					</LinksItem>
				))}
			</LinksList>
		</Wrapper>
	);
};

export default Holding;
