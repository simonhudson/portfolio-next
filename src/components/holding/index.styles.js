import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
`;

const Tagline = styled.h1`
	font-weight: 300;
	text-align: center;

	span {
		display: block;
	}

	span:first-of-type {
		color: #7a7a7a;
		font-size: ${rem(16)};
		text-transform: lowercase;
	}

	span:last-of-type {
		color: ${({ theme }) => theme.palette.primary.bodyText};
		font-size: ${rem(36)};
		font-weight: 500;
		text-transform: uppercase;
	}
`;

const LinksList = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style: none;
`;

const LinksItem = styled.li`
	&:not(:last-of-type) {
		margin: 0 ${({ theme }) => theme.margin.md} 0 0;
	}
`;

const LinksLink = styled.a`
	color: ${({ theme }) => theme.palette.primary.brand};
	font-weight: 500;
	text-decoration: none;
	text-transform: uppercase;
`;

export { Wrapper, Tagline, LinksList, LinksItem, LinksLink };
