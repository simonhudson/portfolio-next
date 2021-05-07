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
		color: #2a2a2a;
		font-size: ${rem(16)};
		text-transform: lowercase;
	}

	span:last-of-type {
		color: ${({ theme }) => theme.palette.primary.bodyText};
		font-size: ${rem(26)};
		font-weight: 500;
		text-transform: uppercase;
	}
`;

export { Wrapper, Tagline };
