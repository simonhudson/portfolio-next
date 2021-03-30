import styled, { css } from 'styled-components';
import { rem } from 'polished';

const Wrap = styled.div`
	/* background-color: ${({ theme }) => theme.palette.primary.white}; */
	/* clip-path: polygon(0% 0, 430% 0%, 20% 100%, 0% 90%); */
	/* height: 100vh; */
	left: 0;
	line-height: 0;
	padding: ${({ theme }) => theme.padding.xlg} 0 0;
	position: absolute;
	top: 0;
	width: 100%;

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
            padding: ${theme.padding.xxxlg} 0 0;
            `
		)};

	/* &::after {
        background-color: ${({ theme }) => theme.palette.primary.white};
        ${({ theme }) =>
		css`
			background-image: radial-gradient(${theme.palette.primary.brand} 1px, transparent 1px),
				radial-gradient(${theme.palette.primary.brand} 1px, ${theme.palette.primary.white} 1px);
		`};
        background-position: 0 0, 20px 20px;
        background-size: 40px 40px;
        content: '';
        height: 100%;
        left: 0;
        opacity: 0.25;
        position: absolute;
        top: 0;
        width: 100%;
    } */
`;

const Inner = styled.div`
	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
                width: 75%;
                `
		)};
`;

const Title = styled.h1`
	color: ${({ theme }) => theme.palette.primary.bodyText};
	font-family: ${({ theme }) => theme.font.serif};
	font-size: ${rem(20)};
	font-weight: 300;
	line-height: ${rem(38)};
	margin-bottom: ${({ theme }) => theme.margin.md};

	span {
		display: block;
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

		&::after {
			content: '';
			display: block;
			border-bottom: 5px solid ${({ theme }) => theme.palette.primary.brand};
			margin: ${({ theme }) => theme.margin.md} 0;
			width: 15%;
		}
	}

	${({ theme }) =>
		theme.media(
			'tablet-l',
			`
            font-size: ${rem(28)};
            line-height: ${rem(46)};
            `
		)};
`;

const SubTitle = styled.p`
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

const CTA = styled.a`
	background: ${({ theme }) => theme.palette.primary.brand};
	border: 2px solid ${({ theme }) => theme.palette.primary.white};
	color: ${({ theme }) => theme.palette.primary.white};
	display: inline-block;
	font-weight: 600;
	font-size: ${rem(16)};
	padding: ${({ theme }) => theme.padding.md};
	padding-right: ${({ theme }) => theme.padding.lg};
	position: relative;
	text-decoration: none;

	&:hover,
	&:focus {
		text-decoration: underline;
	}

	&::after {
		background: transparent;
		border-right: 3px solid ${({ theme }) => theme.palette.primary.white};
		border-bottom: 3px solid ${({ theme }) => theme.palette.primary.white};
		content: '';
		display: inline-block;
		height: ${rem(8)};
		position: absolute;
		right: ${({ theme }) => theme.padding.md};
		top: 50%;
		transform: translateY(-50%) rotate(-45deg);
		width: ${rem(8)};
	}
`;

export { Wrap, Inner, Title, SubTitle, CTA };
