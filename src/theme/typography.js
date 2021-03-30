import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const isValidHeading = (element) => element && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(element.toLowerCase());

const H1 = (props) => {
	const element = isValidHeading(props.element) ? props.element.toLowerCase() : 'h1';

	const StyledH1 = styled[element]`
		font-family: ${({ theme }) => theme.font.sansSerif};
		font-size: ${rem(26)};
		font-weight: 700;

		${({ theme }) =>
			theme.media(
				'tablet-l',
				`
			font-size: ${rem(42)};
			`
			)};
	`;

	return <StyledH1>{props.children}</StyledH1>;
};

const H2 = (props) => {
	const element = isValidHeading(props.element) ? props.element.toLowerCase() : 'h2';

	const StyledH2 = styled[element]`
		font-family: ${({ theme }) => theme.font.serif};
		font-size: ${rem(18)};
		font-weight: 400;
		line-height: ${rem(30)};

		${({ theme }) =>
			theme.media(
				'tablet-l',
				`
            font-size: ${rem(24)};
            line-height: ${rem(36)};
            `
			)};

		a {
			color: ${({ theme }) => theme.palette.primary.brand};
		}
	`;

	return <StyledH2>{props.children}</StyledH2>;
};

export { H1, H2 };
